import Utils from './Utils';

/**
 * ResourceTraversal traverses a `$resource` directive in the schema.
 *
 * A request for the resource is executed at $parse time and the resulting response is put
 * into scope.
 *
 *  @example <caption>Example schema</caption>:
 *   "$resource": {
 *      "name": "person":,
 *      "request": {
 *        "url": "/api/persons",
 *        "method": "GET"
 *       },
 *       "links"{}
 *   }
 * The $resource schema must have only one property, this property is used as
 * the name of the resource when adding to scope.
 *
 * @todo Provide way to read links and make requests available from them.
 * @param {ResourceDirective} request An instance of RequestDirective used to make the request.
 * @param {ParseScope} scope The to add the resource to.
 */
class ResourceTraversal {

    constructor(request, scope) {
        this.request = request;
        this.scope = scope;
    }

    _makeLinkFunction(link) {
        return function () {
            return this.request.send(link);
        }
    }

    traverse(tree, done) {

        this.request.send(tree.request).
            then(function (res) {

                var data = res.data || res.body;
                var links = Utils.createSafeMap();

                if (tree.links)
                    if (Array.isArray(data.links))
                        for (var key in tree.links)
                            data.links.forEach(function (link) {
                                if (link.rel === key)
                                    links[key] = this._makeLinkFunction(Utils.merge(link,
                                        this.scope.swapSymbolsWithContext(tree.links[key])));

                            }.bind(this));

                this.scope.addToResource(tree.name, {data: data, links: links});
                done();

            }.bind(this));
    }

}

export default ResourceTraversal