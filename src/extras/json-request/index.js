var done = (result) => result;
var onError = (e)=>e;

var Adapter = {
    getParameters(params) {
        return params;
    }
};

class Request {

    constructor(engine) {
        this.engine = engine;
    }

    /**
     *
     * @param schema
     * @returns {Promise.<T>}
     */
    promiseRequestFromJSON(schema) {

        var method = (schema.method) ? schema.method.toLowerCase() : 'get';
        var url = schema.url;
        var params = schema.params;
        var adapter = schema.adapter || Adapter;
        params = adapter.getParameters(params);

        if(!this.engine) throw new Error('Request: No engine specified! Did you call setEngine()?');
        return engine[method].call(engine, url, params);

    }

    setEngine(engine){
        this.engine = engine;
    }
}

export default Request