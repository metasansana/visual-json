import dot from 'dot-access';
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

var BUILTIN_SYMBOL = '$$';
var BUILTIN_STR_SYMBOL = '$#';

/**
 * Compiler compiles things that were parsed.
 *
 * Default Symbols:
 *
 *  @:    Swap the value of this property with a value from context
 *  @@:   Swap the value of this property with a value from context then parse that
 *        (Parsing should be handled by the parser).
 *  !@:   Swap the value with the result of a  function from context
 *  $$$:  Process this property as a type or array of types.
 *
 */
class Compiler {

    constructor(types, filters) {
        this.types = types;
        this.filters = filters;
        this.SYMBOLS = {
            SWAP: '@',
            SWAP_AND_PARSE: '@@',
            CALL_AND_SWAP: '!@',
            CALL_AND_SWAP_AND_PARSE_SYMBOL: '!@@',
//            BUILTIN_SYMBOL: '$$',
            //          BUILTIN_STR_SYMBOL: '$#',
            EAGER_COMPILE: '$$$',
            PARSE_STEP: '$->'
        }
    }

    cut(key, target) {
        return key.replace(target, '');
    }

    _checkDups(key, o) {
        if (o.hasOwnProperty(key))
            throw new DuplicateKeyError(key, o);
    }

    _swap(symbol, key, schema, ctx) {

        var desiredKey = schema[key];

        if (desiredKey === 'this') {
            schema[this.cut(key, symbol)] = ctx;

        } else if (typeof ctx[desiredKey] === 'function') {
            schema[this.cut(key, symbol)] = ctx[desiredKey].bind(ctx);

        } else {
            schema[this.cut(key, symbol)] = dot.get(ctx, desiredKey);
        }

        delete schema[key];
        return schema;
    }

    /**
     * hasSymbol checks if a symbol exists in the key.
     *
     * It first checks that no other symbols exists to prevent mixesups.
     * @param key
     * @param sym
     * @returns {boolean}
     */
    hasSymbol(key, sym) {

        for (var index in this.SYMBOLS)
            if (this.SYMBOLS.hasOwnProperty(index))
                if (this.SYMBOLS[index] !== sym)
                    if (key.indexOf(this.SYMBOLS[index]) > -1)
                        return false;

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

        if (this.hasSymbol(key, this.SYMBOLS.SWAP)) {
            this._checkDups(this.cut(key, this.SYMBOLS.SWAP), schema);
            return this._swap(this.SYMBOLS.SWAP, key, schema, ctx);
        }
        return schema;
    }

    swapSymbolAndParse(key, schema, ctx, fn) {

        if (this.hasSymbol(key, this.SYMBOLS.SWAP_AND_PARSE)) {
            this._checkDups(this.cut(key, this.SYMBOLS.SWAP_AND_PARSE), schema);
            var ret = this._swap(this.SYMBOLS.SWAP_AND_PARSE, key, schema, ctx);
            ret[this.cut(key, this.SYMBOLS.SWAP_AND_PARSE)] = fn(ret[this.cut(key, this.SYMBOLS.SWAP_AND_PARSE)], ctx, this);
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

        if (this.hasSymbol(key, this.SYMBOLS.CALL_AND_SWAP)) {

            this._checkDups(this.cut(key, this.SYMBOLS.CALL_AND_SWAP), schema);

            var desiredKey = schema[key];
            var args = desiredKey.split(' ');
            desiredKey = args.shift();

            if (!ctx.hasOwnProperty(desiredKey))
                throw new KeyNotFoundOnContextError(desiredKey);

            schema[this.cut(key, this.SYMBOLS.CALL_AND_SWAP)] = ctx[desiredKey].apply(ctx, args);

            delete schema[key];
        }

        return schema;
    }

    swapFilter(key, schema, ctx) {

        var self = this;

        if (key === '$$filter') {

            this._checkDups(this.cut(key, '$$filter'), schema);

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

        if (key.indexOf(this.SYMBOLS.EAGER_COMPILE) > -1)
            if (!Array.isArray(schema[key])) {
                this._checkDups(this.cut(key, this.SYMBOLS.EAGER_COMPILE), schema);
                schema[this.cut(key, this.SYMBOLS.EAGER_COMPILE)] = this.compile(schema[key]);
                delete schema[key];
            }
        return schema;

    }

    eagerCompileArray(key, schema, ctx, types) {

        if (key.indexOf(this.SYMBOLS.EAGER_COMPILE) > -1)
            if (Array.isArray(schema[key])) {

                this._checkDups(this.cut(key, this.SYMBOLS.EAGER_COMPILE), schema);

                schema[this.cut(key, this.SYMBOLS.EAGER_COMPILE)] = schema[key].map(function (scheme) {
                    return this.compile(scheme);
                }.bind(this));

                delete schema[key];
            }
        return schema;

    }

    compile(schema) {

        if (!schema.type)
            return schema;

        if (schema.type in this.types)
            return this.types[schema.type](schema);

        if (schema.type in inputs)
            return this.types.input(schema);

        return this.types.default(schema);

    }

}

export default Compiler;

