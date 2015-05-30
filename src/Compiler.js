import dot from 'dot-component';
import fmt from 'strtpl';
class TypedError extends Error {

    constructor(message) {
        super();

        if (Error.hasOwnProperty('captureStackTrace'))
            Error.captureStackTrace(this, this.constructor);
        else
            Object.defineProperty(this, 'stack', {
                value: (new Error()).stack
            });

        Object.defineProperty(this, 'message', {
            value: message
        });
    }

    get name() {
        return this.constructor.name;
    }

}

class KeyNotFoundOnContextError extends TypedError {

    constructor(key) {
        super('The Parse context does not have a key ' + key + '!');
    }
}

class DuplicateKeyError extends TypedError {

    constructor(key, o) {
        super(
            'The key "' + key +
            '" appears twice in your schema! This will end the world if we do any swapping or compiling! Schema: ' +
            JSON.stringify(o));
    }
}

var inputs = {
    text: 1, date: 1, datetime: 1, range: 1, button: 1, color: 1, 'datetime-local': 1,
    email: 1, file: 1, hidden: 1, image: 1, month: 1, number: 1, password: 1, search: 1, tel: 1,
    time: 1, url: 1, week: 1
};

var cut = function (key, target) {
    return key.replace(target, '');
};

var SWAP_SYMBOL = '@';
var SWAP_AND_PARSE_SYMBOL = '@@';
var CALL_AND_SWAP_SYMBOL = '$@';
var BUILTIN_SYMBOL = '$$';
var BUILTIN_STR_SYMBOL = '$#';
var EAGER_COMPILE_SYMBOL = '$$$';

/**
 * Compiler compiles things that were parsed.
 *
 * Default Symbols:
 *
 *  @:    Swap the value of this property with a value from context
 *  @@:   Swap the value of this property with a value from context then parse that
 *        (Parsing should be handled by the parser).
 *  $@:    Swap the value with a function from context (the function is bind() to context first)
 *  $$:   Swap this value with a builtin value or function.
 *  $#:   Treat the value as a string template, swapping out {{x}} for the value of x.
 *  $$$:  Process this property as a type or array of types.
 *
 *
 */
class Compiler {

    constructor(types, filters) {
        this.types = types;
        this.filters = filters;
    }

    _checkDups(key, o) {
        if (o.hasOwnProperty(key))
            throw new DuplicateKeyError(key, o);
    }

    _swap(symbol, key, schema, ctx) {

        var desiredKey = schema[key];

        if (desiredKey === 'this') {
            schema[cut(key, symbol)] = ctx;

        } else if (typeof ctx[desiredKey] === 'function') {
            schema[cut(key, symbol)] = ctx[desiredKey].bind(ctx);

        } else {
            schema[cut(key, symbol)] = dot.get(ctx, desiredKey);
        }

        delete schema[key];
        return schema;
    }

    hasSymbol(key, sym) {
        return (key.indexOf(sym) > -1);
    }

    /**
     * swapSymbol
     *
     * @param {String} key
     * @param {Object}schema
     * @param {Object} ctx
     * @returns {*}
     */
    swapSymbol(key, schema, ctx) {

        if (this.hasSymbol(key, SWAP_SYMBOL))
            if (!this.hasSymbol(key, SWAP_AND_PARSE_SYMBOL)) {
                this._checkDups(cut(key, SWAP_SYMBOL), schema);
                return this._swap(SWAP_SYMBOL, key, schema, ctx);
            }
        return schema;
    }

    swapSymbolAndParse(key, schema, ctx, fn) {

        if (this.hasSymbol(key, SWAP_AND_PARSE_SYMBOL)) {
            this._checkDups(cut(key, SWAP_AND_PARSE_SYMBOL), schema);
            var ret = this._swap(SWAP_AND_PARSE_SYMBOL, key, schema, ctx);
            ret[cut(key, SWAP_AND_PARSE_SYMBOL)] = fn(ret[cut(key, SWAP_AND_PARSE_SYMBOL)], ctx, this);
            return ret;
        }

        return schema;
    }

    /**
     * swapAndBindSymbol
     *
     * @param {String} key
     * @param {Object}schema
     * @param {Object} ctx
     * @returns {*}
     */
    callAndSwapSymbol(key, schema, ctx) {

        if (this.hasSymbol(key, CALL_AND_SWAP_SYMBOL)) {

            this._checkDups(cut(key, CALL_AND_SWAP_SYMBOL), schema);

            var desiredKey = schema[key];
            var args = desiredKey.split(' ');
            desiredKey = args.shift();

            if (!ctx.hasOwnProperty(desiredKey))
                throw new KeyNotFoundOnContextError(desiredKey);

            schema[cut(key, CALL_AND_SWAP_SYMBOL)] = ctx[desiredKey].apply(ctx, args);

            delete schema[key];
        }

        return schema;
    }

    swapTemplateStrings(key, schema, ctx) {

        if (this.hasSymbol(key, BUILTIN_STR_SYMBOL)) {

            var realKey = cut(key, BUILTIN_STR_SYMBOL);

            this._checkDups(realKey, schema);

            var value = schema[key];


            if (Array.isArray(value)) {
                schema[realKey] = value.map(function (v) {
                    return fmt(v, ctx);
                });
            } else {
                schema[realKey] = fmt(value, ctx);
            }

            schema[realKey] = fmt(schema[key], ctx);

            delete schema[key];

        }

        return schema;

    }

    swapFilter(key, schema, ctx) {

        var self = this;

        if (key === '$$filter') {

            this._checkDups(cut(key, '$$filter'), schema);

            schema.filter = function (filters) {

                return function (value, data) {
                    return self.filter(value, filters, data);
                }

            }(schema.$$filter);

            delete schema.$$filter;

        }
        return schema;

    }

    /**
     * filter a value based on a '\' delimited string of filters.
     * @param {*} value
     * @param {String} list
     * @param {Object} context
     * @param {Function} cb
     * @returns {*}
     */
    filter(value, list, context) {

        if (!list) return value;

        var self = this;

        var filters = list.split('|').map(str =>  str.trim().split(' '));

        var next = function (thisValue) {

            if (filters.length < 1)
                return thisValue;

            var nextFilterArray = filters.shift();
            var nextFilterMethodName = nextFilterArray.shift();

            if (!self.filters.hasOwnProperty(nextFilterMethodName))
                throw new Error('Unknown filter ' + nextFilterMethodName + '!');

            /* filter(value, args1...argn, context, next)*/

            nextFilterArray.unshift(thisValue);
            nextFilterArray.push(context);
            nextFilterArray.push(next);
            return self.filters[nextFilterMethodName].apply(self.filters, nextFilterArray);
        }

        return next(value);

    }

    eagerCompile(key, schema, ctx, types) {

        if (key.indexOf(EAGER_COMPILE_SYMBOL) > -1)
            if (!Array.isArray(schema[key])) {
                this._checkDups(cut(key, EAGER_COMPILE_SYMBOL), schema);
                schema[cut(key, EAGER_COMPILE_SYMBOL)] = this.compile(schema[key]);
                delete schema[key];
            }
        return schema;

    }

    eagerCompileArray(key, schema, ctx, types) {

        if (key.indexOf(EAGER_COMPILE_SYMBOL) > -1)
            if (Array.isArray(schema[key])) {

                this._checkDups(cut(key, EAGER_COMPILE_SYMBOL), schema);

                schema[cut(key, EAGER_COMPILE_SYMBOL)] = schema[key].map(function (scheme) {
                    return this.compile(scheme);
                }.bind(this));

                delete schema[key];
            }
        return schema;

    }

    compile(schema) {

        if (schema.type in this.types)
            return this.types[schema.type](schema);

        if (schema.type in inputs)
            return this.types.input(schema);

        return this.types.default(schema);

    }

}

export default Compiler;

