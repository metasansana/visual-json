/**
 * SetDirective traverses a `$set` directive and puts the keys
 * found in the `$local` scope.
 *
 *
 * @example <caption>Example schema</caption>
 * {
 *  "$set": {
 *       @id: "$resource.report.data.reportID",
 *      "oid": "23"
 *  }
 * }
 */
class SetDirective {

    apply(tree, scope, done) {

        tree = scope.applySymbols(tree);

        for(var key in tree)
            if (tree.hasOwnProperty(key))
                scope.set('$local', key, tree[key]);
    }

}

export default SetDirective