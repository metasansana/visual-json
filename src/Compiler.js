import dot from 'dot-component';


class KeyNotFoundOnContextError extends Error {

    constructor(key) {
        super('ParseContext does not have a key ' + key + '!');
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
var CALL_AND_SWAP_SYMBOL = '@@';
var BUILTIN_SYMBOL = '$$';
var EAGER_COMPILE_SYMBOL = '$$$';

/**
 * Compiler compiles things that were parsed.
 *
 * Default Symbols:
 *
 *  @:    Swap the value of this property with a value from context
 *  @@:    Swap the value with a function from context (the function is bind() to context first)
 *  $$:   Swap this value with a builtin value or function.
 *  $$$:  Process this property as a type or array of types.
 *
 *
 */
class Compiler {

    constructor(types) {
        this.types = types;
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

        if (key.indexOf(SWAP_SYMBOL) > -1) {

            var desiredKey = schema[key];

            //if (!ctx.hasOwnProperty(desiredKey))
            //  if (desiredKey !== 'this')
            //    throw new KeyNotFoundOnContextError(desiredKey);

            if (desiredKey === 'this') {
                schema[cut(key, SWAP_SYMBOL)] = ctx;

            } else if (typeof ctx[desiredKey] === 'function') {
                schema[cut(key, SWAP_SYMBOL)] = ctx[desiredKey].bind(ctx);

            } else {
                schema[cut(key, SWAP_SYMBOL)] = dot.get(ctx, desiredKey);
            }

            delete schema[key];
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

        if (key.indexOf(CALL_AND_SWAP_SYMBOL) > -1) {

            var desiredKey = schema[key];
            var args = desiredKey.split(',');
            desiredKey = args.shift();

            if (!ctx.hasOwnProperty(desiredKey))
                throw new KeyNotFoundOnContextError(desiredKey);

            schema[cut(key, CALL_AND_SWAP_SYMBOL)] = ctx[desiredKey].apply(ctx, args);

            delete schema[key];
        }

        return schema;
    }

    /**
     * swapContextSymbol
     *
     * @param {String} key
     * @param {Object} schema
     * @param {Object} ctx
     * @returns {*}
     */
    swapContextSymbol(key, schema, ctx) {

        if (key.indexOf(CONTEXT_SYMBOL) > -1) {
            schema[cut(key, CONTEXT_SYMBOL)] = ctx;
            delete schema[key];
        }

        return schema;
    }


    swapFilter(key, schema, ctx) {

        if (key === '$$filter') {

            schema.filter = function (filters, ctx) {

                return function (value) {
                    return self.filter(value, filters, ctx);
                }
            }(schema.$$filter, defaults);

            delete schema.$$filter;

        }
        return schema;

    }

    eagerCompile(key, schema, ctx, types) {

        if (key.indexOf(EAGER_COMPILE_SYMBOL) > -1)
            if (!Array.isArray(schema[key])) {
                schema[cut(key, EAGER_COMPILE_SYMBOL)] = this.compile(schema[key]);
                delete schema[key];
            }
        return schema;

    }

    eagerCompileArray(key, schema, ctx, types) {

        if (key.indexOf(EAGER_COMPILE_SYMBOL) > -1)
            if (Array.isArray(schema[key])) {
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

