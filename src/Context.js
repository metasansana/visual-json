import merge from 'merge';
import Processor from './Processor';
/**
 * Context
 */
class Context {

    constructor(){
        this.filters = {};
        this.handlers = {};
        this.types = {};
    }

    /**
     *
     * @param {Object} filters
     * @returns {Context}
     */
    addFilters(filters:Object){
        this.filters = merge(this.filters, filters);
        return this;
    }

    /**
     *
     * @param {Object}handlers
     * @returns {Context}
     */
    addHandlers(handlers:Object) {
        this.handlers = merge(this.handlers, handlers);
        return this;
    }

    /**
     *
     * @param {Object} types
     * @returns {Context}
     */
    addTypes(types:Object){
        this.types = merge(this.types, types);
        return this;
    }

    /**
     *
     * @param {Object} json
     * @param {Object} defaults
     * @returns {React.Element}
     */
    parse(json:Object, defaults:Object) {

        json = JSON.parse(JSON.stringify(json));
        var processor = new Processor(this.types, this.filters, this.handlers);
        return processor.process(json, defaults);


    }

    /**
     *
     * @param {Array} json
     * @param {Object} defaults
     * @returns {Array}
     */
    parseMany(json:Array, defaults:Object) {

        var processor = new Processor(this.types, this.filters, this.handlers);

        return json.map(function(schema, i) {
            schema = JSON.parse(JSON.stringify(schema));

            if(schema.key)
            throw new Error('The key property is restricted! Found key: '+i+'.');

            schema.key = i;

            return processor.process(schema, defaults);

        })

    }

}

export default Context

