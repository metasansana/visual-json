var done = (result) => result;
var onError = (e)=>e;
/**
 * RequestDirective traverses a `$request` directive and turns the definitions
 * there into executable functions.
 *
 * @example <caption>Example schema</caption>
 * {
 *  "$request":
 *    "nullRequest": {
 *      "href": "/dev/null",
 *      "method": "GET",
 *      "@onSuccess": "self.doSomething",
 *      "@onError": "self.fixError",
 *      "@params": "self.query"
 *    }
 *  }
 */
class RequestDirective {

    constructor(engine) {
        this.engine = engine;
    }

    makeRequestFunction(schema) {
        return function () {
            return this.send(schema);
        }
        bind(this);
    }

    apply(tree, scope, done) {

        for (var key in  tree)
            if (tree.hasOwnProperty(key))
                scope.set('$request', key, this.makeRequestFunction(tree[key]));

    }

    /**
     * send the request
     * @param {Object} schema A request schema object that is used to build the request.
     * @param {String} schema.method
     * @param {String} schema.href
     * @param {RequestAdapter} [schema.adapter]
     * @param {Function} [schema.onSuccess]
     * @param {Function} [schema.onError]
     * @param {HTTPEngine} [schema.engine]
     * @returns {Promise}
     */
    send(schema) {

        var engine = schema.engine || this.engine;
        var method = schema.method.toLowerCase();
        var url = schema.url;
        var params = schema.params;

        if (schema.adapter) {
            url = schema.adapter.getUrl(schema);
            params = schema.adapter.getParams(schema);
        }

        return engine[method].call(engine, url, params).
            then(schema.onSuccess || done).
            catch(schema.onError || onError);

    }

}

export default RequestDirective