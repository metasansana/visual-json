import dot from 'property-seek';
import strtpl from 'strtpl';
import Compiler from './Compiler';

/**
 * Parser
 */
class Parser {

    constructor(compiler, context) {
        this.env = compiler;
        this.context = context;
        this.number = 0;
    }

    parseObjectLike(schema, context) {

        if (Array.isArray(schema))
            return this.parseArray(schema, context);

        if (typeof schema === 'object')
            return this.parseObject(schema, context);

        return schema;
    }

    parseArray(schema, context) {
        return schema.map(function (scheme, key) {
            if(scheme.type)
            scheme.key = key;
            return this.parse(scheme, context);
        }.bind(this))
    }

    parseObject(schema, context) {

        for (var key in schema) {
            if (schema.hasOwnProperty(key)) {

                schema = this.env.swapTemplate(key, schema, context);
                schema = this.env.swapSymbolAndParse(key, schema, context, this.parseObject.bind(this));
                schema = this.env.callAndSwapSymbol(key, schema, context);
                schema = this.env.swapSymbol(key, schema, context);
                schema = this.env.eagerCompile(key, schema, context);
                schema = this.env.eagerCompileArray(key, schema, context);

                if (this.env.hasSymbol(key, '$->')) {
                    schema[this.env.cut(key, '$->')] = this.parseObjectLike(schema[key], context);
                    delete schema[key];
                }

            }
        }

        if(schema.type) {
            this.number++;
            schema.$parser = this;
            schema.$context = context;
            schema.$number = this.number;
            schema.$template = this.template.bind(this);
            schema.$filter = this.env.filter.bind(this.env);
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
        return this.env.template(value, context);
    }

    filter(){
        return this.env.filter.apply(this.env, arguments);
    }

    /**
     * cloneProp can be used to clone props but removes any '$' values.
     * @param {Object} schema
     * @param {Object} props
     * @returns {Object}
     */
    cloneProps(schema, props) {

        props = props || schema;
        var o = {};

        for (var key in schema)
            if (schema.hasOwnProperty(key))
            if(props.hasOwnProperty(key))
                if (key[0] !== '$')
                    o[key] = schema[key];

        return o;

    }

    /**
     *
     * @param {Object|Array} schema The schema for the item being processed
     * @param {Context} context
     * @returns {*}
     */
    parse(schema, context) {
        if (!schema) return schema;
        schema = this.parseObjectLike(JSON.parse(JSON.stringify(schema)), context || this.context);
        if ((typeof schema !== 'object') || Array.isArray(schema)) return schema;
        return this.env.compile(schema);
    }

}

export default Parser;

