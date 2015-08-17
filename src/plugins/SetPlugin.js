/**
 * SetPlugin traverses a `$set` directive and puts the keys
 * found in the `$local` scope.
 *
 *
 * @example <caption>Example schema</caption>
 * {
 *  "visual:set": {
 *       @id: "$resource.report.data.reportID",
 *      "oid": "23"
 *  }
 * }
 */
class SetPlugin {

    /**
     *
     * @param {Tree} tree
     * @param {Scope} scope
     */
    apply(tree, scope) {

        var $ = tree.getDirectiveTreeBySymbol(SetPlugin.SYMBOL);

        if($.isEmpty()) return;

        $.forEachKey(function(value, key){
           scope.set('$local', key, value);
        });

    }

}

SetPlugin.SYMBOL = 'visual:set';
export default SetPlugin