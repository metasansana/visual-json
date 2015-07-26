var done = (result) => result;
var onError = (e)=>e;

var Adapter = {
    getParameters(params) {
        return params;
    }
};
/**
 * RequestPlugin traverses a `$request` directive and turns the definitions
 * there into executable functions.
 *
 * @example <caption>Example schema</caption>
 * {
 *      "href": "/dev/null",
 *      "method": "GET",
 *      "@adapter":"$global.QueryAdapter",
 *      "@onSuccess": "self.doSomething",
 *      "@onError": "self.fixError",
 *      "@params": "self.query"
 *  }
 */
class RequestPlugin {

    constructor(engine) {
        this.engine = engine;
    }

    /**
     *
     * @param schema
     * @returns {Promise.<T>}
     */
    send(schema) {

        var {method, url, params, adapter, onError, before, after} = schema;
        var request;

        method = (method) ? method.toLowerCase() : 'get';
        adapter = adapter || Adapter;
        params = adapter.getParameters(params);

        if (!this.engine) throw new Error('Request: No engine specified! Did you call setEngine()?');

        if (before) before();
        request = this.engine[method].call(this.engine, url, params);
        if (after) request.then(after);
        if (onError) request.catch(onError);

        return request;

    }

    makeRequestFunction(schema) {
        return ()=>this.send(schema);
    }

    apply(tree, scope) {

        var hot = tree.getDirectiveTreesBySymbol(RequestPlugin.REQUEST_HOT_SYMBOL);
        var cold = tree.getDirectiveTreesBySymbol(RequestPlugin.REQUEST_COLD_SYMBOL);

        hot.map(branch=> {
            branch.receiveSymbols(scope);
            tree.set(branch.key, this.send(branch.toObject()));
        });

        cold.map(branch=> {
            branch.receiveSymbols(scope);
            tree.set(branch.key, this.makeRequestFunction(branch.toObject()));
        });

    }

}

RequestPlugin.REQUEST_HOT_SYMBOL = 'request_now:';
RequestPlugin.REQUEST_COLD_SYMBOL = 'request_call:';
export default RequestPlugin