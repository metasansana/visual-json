import merge from 'merge';

import Parser from './Parser';
import Compiler from './Compiler';

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
     * @param {Object} ctx
     * @returns {React.Element}
     */
    generate(json, ctx) {

        var parser = new Parser();
        return parser.parse(json, ctx, new Compiler(this.types, this.filters));


    }

}

export default Context

