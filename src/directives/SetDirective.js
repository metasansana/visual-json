/**
 * SetDirective traverses a `$set` directive and puts the keys
 * found in scope.
 *
 * The keys of the schema are use to tell this directive where to put
 * the values.
 *
 * @example <caption>Example schema</caption>
 * {
 *  "$set": {
 *    "@report": "$resource.report.data.reportID",
 *    "batch": 32
 *  }
 * }
 */
class SetDirective {

    apply(tree, scope, done) {

        tree = scope.applySymbols(tree);

        for(var key in tree)
            if (tree.hasOwnProperty(key))

                scope.set('$set', key, tree[key]);

        done();
    }

}

export default SetDirective