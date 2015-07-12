import merge from 'merge';
import Parser from './Parser';
import Compiler from './Compiler';
import types from './types';
import filters from './filters';

/**
 * Realm
 */
class Realm {

    constructor(types, filters, cache){
        this.env = types || {};
        this.filters = filters || {};
        this.cache = cache || {};
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
    addTypes(types){
        this.env = merge(this.env, types);
        return this;
    }

    addCache(cache){
        this.cache = merge(this.cache, cache);
        return this;
    }

    /**
     *
     * @param {Object} json
     * @param {Object} ctx
     * @returns {ParseTraversal}
     */
    getParser(ctx) {
        return new Parser(new Compiler(this.env, this.filters, this.cache || {}), ctx);
    }

}

Realm.getDefaultRealm = function() {
    return new Realm(types, filters);
};

export default Realm;

