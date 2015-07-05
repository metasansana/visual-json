import Utils from '../core/Utils';
import RequestDirective from './RequestDirective';

/**
 * ResourceDirective scans a `$resource` directive and executes a request.
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
 * @param {HTTPEngine} engine
 *
 */
class ResourceDirective extends RequestDirective {

    apply(tree, scope, done) {

        this.send(tree.request).
            then(function (res) {

                var data = res.data || res.body;
                var links = Utils.createSafeMap();

                if (tree.links)
                    if (Array.isArray(data.links))
                        for (var key in tree.links)
                            data.links.forEach(function (link) {
                                if (link.rel === key)
                                    links[key] = this.makeRequestFunction(Utils.merge(link,
                                        scope.applySymbols(tree.links[key])));
                            }.bind(this));

                scope.set('$resource', tree.name, {data: data, links: links});

                done();

            }.bind(this));
    }

}

export default ResourceDirective