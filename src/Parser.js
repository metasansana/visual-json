import dot from 'dot-component';
import Compiler from './Compiler';

/**
 * Parser
 */
class Parser {

    /**
     * parseFilters filters a value based on a '\' delimited string of filters.
     * @param {*} value
     * @param {String} list
     * @param {Object} context
     * @param {Function} cb
     * @returns {*}
     */
    parseFilters(value, list, context) {

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

            nextFilterArray.unshift(thisValue);
            nextFilterArray.push(context);
            nextFilterArray.push(next);
            return self.filters[nextFilterMethodName].apply(self.filters, nextFilterArray);
        }

        return next(value);

    }

    parseObjectLike(schema, ctx, compiler) {

        if (Array.isArray(schema))
            return this.parseArray(schema, ctx, compiler);

        if (typeof schema === 'object')
                return this.parseObject(schema, ctx, compiler);

        return schema;
    }

    parseArray(schema, ctx, compiler) {
        return schema.map(function (scheme, i) {
            return this.parseObjectLike(scheme, ctx, compiler);
        }.bind(this))
    }

    parseObject(schema, ctx, compiler) {

        for (var key in schema) {
            if (schema.hasOwnProperty(key)) {

                schema[key] = this.parseObjectLike(schema[key], ctx, compiler);
                schema = compiler.swapSymbol(key, schema, ctx);
                schema = compiler.callAndSwapSymbol(key, schema, ctx);
                schema = compiler.eagerCompile(key, schema, ctx);
                schema = compiler.eagerCompileArray(key, schema, ctx)

            }
        }

        return schema;
    }

    /**
     *
     * @param {Object|Array} schema The schema for the item being processed
     * @param {Object} defaults A map of key value pairs that can be queried for default values
     * @param {Object} ctx
     * @param {Compiler} compiler
     * @returns {Something}
     */
    parse(schema, ctx, compiler) {

        schema = this.parseObjectLike(JSON.parse(JSON.stringify(schema)), ctx, compiler);
        return compiler.compile(schema);

    }


}

export default Parser;

