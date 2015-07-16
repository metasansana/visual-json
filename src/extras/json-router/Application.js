/**
 * Application is the interface an application is expected to implement to
 * use the Router.
 * @interface
 */
class Application {

    /**
     * renderContent is called each time the browser navigates to a registered url.
     * @param {JSON} view
     * @param {DOMNode} node
     * @param {Object} request
     */
    renderContent(view, node, request){}

}

export default Application