/**
 * SetDirective traverses a `$set` directive and puts the keys
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
class SetDirective {

    /**
     *
     * @param {Tree} tree
     * @param {Scope} scope
     */
    apply(tree, scope) {

        var $ = tree.getDirectiveTreeBySymbol(SetDirective.SYMBOL);

        if($.isEmpty()) return;

        $.forEachKey(function(value, key){
           scope.set('$local', key, value);
        });

    }

}

SetDirective.SYMBOL = 'visual:set';
export default SetDirective