import Grapnel from 'grapnel';

/**
 * Router provides a simple json powered view router.
 *
 * Define your routes in a json file and pass it to Router#configure.
 * The json file must be valid and follow this syntax:
 * @example
 * {
 *   "resource":"/api/specimens",
 *   "url":"#/specimens/new",
 *   "controller":"FormView",
 *   "target": "content0",
 *   "view": {$ref:"specimen_something.json"
 * }
 *
 */
class Router {

    constructor(framework) {
        this.framework = framework;
    }

    /**
     * configure sets up a list of routes with the global router.
     * @param {Array} routes
     * @param {Application} spa
     */
    configure(routes, spa) {

        routes.forEach(
                route=>
                this.framework.get(route.url, req=>
                    spa.renderContent(route.view,
                        document.getElementById(route.container), req)));
    }

}

export default new Router(new Grapnel());