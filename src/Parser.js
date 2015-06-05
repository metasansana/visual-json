import dot from 'dot-access';
import strtpl from 'strtpl';
import Compiler from './Compiler';

/**
 * Parser
 */
class Parser {

    constructor(compiler, context) {
        this.compiler = compiler;
        this.context = context;
        this.number = 0;
    }

    parseObjectLike(schema) {

        if (Array.isArray(schema))
            return this.parseArray(schema);

        if (typeof schema === 'object')
            return this.parseObject(schema);

        return schema;
    }

    parseArray(schema) {
        return schema.map(function (scheme, key) {
            if(scheme.type)
            scheme.key = key;
            return this.parse(scheme);
        }.bind(this))
    }

    parseObject(schema) {

        var context = this.context;

        for (var key in schema) {
            if (schema.hasOwnProperty(key)) {

                schema = this.compiler.swapSymbolAndParse(key, schema, context, this.parseObject.bind(this));
                schema = this.compiler.callAndSwapSymbol(key, schema, context);
                schema = this.compiler.swapSymbol(key, schema, context);
                schema = this.compiler.swapFilter(key, schema, context);
                schema = this.compiler.eagerCompile(key, schema, context);
                schema = this.compiler.eagerCompileArray(key, schema, context);

                if (this.compiler.hasSymbol(key, '$->')) {
                    schema[this.compiler.cut(key, '$->')] = this.parseObjectLike(schema[key]);
                    delete schema[key];
                }



            }
        }

        if(schema.type) {
            this.number++;
            schema.$parser = this;
            schema.$context = this.context;
            schema.$number = this.number;
            schema.$template = this.template.bind(this);
            schema.$filter = this.compiler.filter.bind(this.compiler);
        }

        return schema;
    }

    /**
     * template swaps value between {{ }} for some value on the context.
     * @param value
     * @param context
     */
    template(value, context) {
        context = context || this.context;
        return strtpl(value, context);
    }

    /**
     * cloneProp can be used to clone props but removes any '$' values.
     * @param schema
     * @returns {Object}
     */
    cloneProps(schema) {

        var o = {};

        for (var key in schema)
            if (schema.hasOwnProperty(key))
                if (key[0] !== '$')
                    o[key] = schema[key];

        return o;

    }

    /**
     *
     * @param {Object|Array} schema The schema for the item being processed
     * @param {Compiler} compiler
     * @returns {*}
     */
    parse(schema) {
        if (!schema) return schema;
        schema = this.parseObjectLike(JSON.parse(JSON.stringify(schema)));
        if ((typeof schema !== 'object') || Array.isArray(schema)) return schema;
        return this.compiler.compile(schema);
    }

}

export default Parser;

