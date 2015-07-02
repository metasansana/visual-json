var done = (result) => result;
var onError = (e)=>e;


/**
 * Request provides an api for making ajax requests.
 *
 * An instance of request must be instantiated with an
 * HTTPEngine. Request's single send() method accepts a
 * RequestDescription that tells it how to make the request.
 * @param {HTTPEngine} engine
 */
class Request  {

    constructor(engine) {
        this.engine = engine;
    }

    /**
     * send the request
     * @param {Object} description A request description object that is used to build the request.
     * @param {String} description.method
     * @param {String} description.url
     * @param {RequestAdapter} [description.adapter]
     * @param {Function} onSuccess
     * @param {Function} [onError]
     * @param {Function} [onFinished]
     * @param {HTTPEngine} [engine]
     * @returns {Promise}
     */
    send(description) {

        var engine = description.engine || this.engine;
        var method = description.method.toLowerCase();
        var url = description.url;
        var params = description.params;

        if(description.adapter) {
            url = description.adapter.getUrl(description);
            params = description.adapter.getParams(description);
        }

        return engine[method].call(engine, url, params).
            then(description.onSuccess || done).
            catch(description.onError || onError).
            finally(description.onFinished || done)
    }
}

export default Request