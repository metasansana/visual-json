import dot from 'dot-component';
import strtpl from 'strtpl';

import Compiler from './Compiler';

/**
 * Parser
 */
class Parser {

    parseObjectLike(schema, ctx, compiler) {

        if (Array.isArray(schema))
            return this.parseArray(schema, ctx, compiler);

        if (typeof schema === 'object')
            return this.parseObject(schema, ctx, compiler);

        return schema;
    }

    parseArray(schema, ctx, compiler) {
        return schema.map(function (scheme) {
            return this.parseObjectLike(scheme, ctx, compiler);
        }.bind(this))
    }

    parseObject(schema, ctx, compiler) {

        if(!schema)  {
            console.log('Null or undefined schema detected ',schema);
            throw new Error('Schema is null or undefined!');
        }

        var $parse = function (parser, ctx, compiler) {
            return function (schema, newCtx) {
                ctx = newCtx || ctx;
                console.log('cyclic schema ', schema);
                return compiler.compile(parser.parseObjectLike(JSON.parse(JSON.stringify(schema)),
                    ctx, compiler));
            }
        }(this, ctx, compiler);

        for (var key in schema) {
            if (schema.hasOwnProperty(key)) {

                if (schema.$$NO_DEEP_PARSE !== true)
                    schema[key] = this.parseObjectLike(schema[key], ctx, compiler);

                schema = compiler.swapSymbolAndParse(key, schema, ctx, this.parseObjectLike.bind(this));
                schema = compiler.swapTemplateStrings(key, schema, ctx);
                schema = compiler.callAndSwapSymbol(key, schema, ctx);
                schema = compiler.swapSymbol(key, schema, ctx);
                schema = compiler.swapFilter(key, schema, ctx);
                schema = compiler.eagerCompile(key, schema, ctx);
                schema = compiler.eagerCompileArray(key, schema, ctx)

            }
        }

        if (schema.$$parse) {
            schema.parse = $parse;
            delete schema.$$parse;
        }

        schema.$parse = $parse;
        schema.$template =  function(value, context) {
            context = context || ctx;
            return strtpl(value, context);
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

        schema = this.parseObject(JSON.parse(JSON.stringify(schema)), ctx, compiler);
        return compiler.compile(schema);

    }


}

export default Parser;

