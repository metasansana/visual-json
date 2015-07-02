/**
 * HTTPEngine is an interface that allows http requests to be made over the wire.
 * @interface
 */
class HTTPEngine {
    head(url, params){};
    get(url, params){};
    post(url, params){};
    put(url, params){};
    patch(url, params){};
    delete(url, params){};
}

export default HTTPEngine