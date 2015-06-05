import merge from 'merge';
import Parser from './Parser';
import Compiler from './Compiler';
import types from './types';
import filters from './filters';

/**
 * Realm
 */
class Realm {

    constructor(types, filters){
        this.types = types || {};
        this.filters = filters || {};
    }

    /**
     *
     * @param {Object} filters
     * @returns {Realm}
     */
    addFilters(filters){
        this.filters = merge(this.filters, filters);
        return this;
    }

        /**
     *
     * @param {Object} types
     * @returns {Realm}
     */
    addTypes(types:Object){
        this.types = merge(this.types, types);
        return this;
    }

    /**
     *
     * @param {Object} json
     * @param {Object} ctx
     * @returns {Parser}
     */
    getParser(ctx) {

        return new Parser(new Compiler(this.types, this.filters), ctx);
    }

}

Realm.getDefaultRealm = function() {
    return new Realm(types, filters);
};

export default Realm;

