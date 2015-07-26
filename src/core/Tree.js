import Utils from './Utils';

/**
 * Tree represents the json tree that we used to build our views.
 * @param {Object} The raw json
 * @param {String} key
 */
class Tree {

    constructor(json, key) {
        this.schema = json;
        this.key = key;
    }

    get(key) {
        return this.schema[key];
    }

    getTree(key){
        return new Tree(this.schema[key], key);
    }

    set(key, value) {
        this.schema[key] = value;
        return this;
    }

    isEmpty() {

        if(!this.schema) return false;

        if (this.isArray())
            return (this.schema.length < 1);

        if (this.isObject())
            return (Object.keys(this.schema).length < 1);

        return (this.schema);

    }

    isPrimitive() {
        return (typeof this.schema !== 'object');
    }

    isArray() {
        return Array.isArray(this.schema);
    }

    isObject() {
        if(!this.schema) return false;
        return ((typeof this.schema === 'object') && (!Array.isArray(this.schema)));
    }

    /**
     * toObject returns a copy of the internal json tree.
     * If the tree is a primitive, it is returned.
     * If the tree is an array, Array#slice() is returned
     * If the tree is an object, it is stripped of any directive keys (keys with ':') and a new object returned.
     * @returns {*}
     */
    toObject() {

        if (this.isArray()) return this.schema.slice();

        if (this.isObject()) {
            var keys = Object.keys(this.schema).filter(key=>(key.indexOf(':') < 0));
            var ret = {};
            keys.forEach(key=>ret[key] = this.schema[key]);
            return ret;
        }

        return this.schema;
    }

    map(cb) {
        if(this.isEmpty()) return;
        var json = (this.isArray()) ? this.schema : [this.schema];
        return json.map((schema, key)=>new Tree(schema, key)).map(cb);
    }

    forEachKey(cb) {

        for (var key in this.schema)
            if (this.schema.hasOwnProperty(key))
                cb(this.schema[key], key)

    }

    receiveSymbols(scope) {
        this.schema = scope.applySymbols(this.schema);
    }

    getDirectiveTreesBySymbol(symbol) {

        return Object.keys(this.schema).map(function (key) {
            if (Utils.startsWith(key, symbol))
                return new Tree(this.schema[key], key.split(':').pop());
            return false;
        }.bind(this)).filter(v=>v);

    }


    getDirectiveTreeBySymbol(symbol) {

        for (var key in this.schema)
            if (this.schema.hasOwnProperty(key))
                if (Utils.startsWith(key, symbol))
                    return new Tree(this.schema[key], key.split(':').pop());

        return new Tree(null, null);

    }

}

export default Tree