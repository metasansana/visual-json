/**
 * SourcePlugin provides the source of the tree being parsed.
 * {
 *  visual:source: true
 * }
 */
class SourcePlugin {

    /**
     *
     * @param {Tree} tree
     * @param {Scope} scope
     */
    apply(tree, scope) {

        var $ = tree.getDirectiveTreeBySymbol(SourcePlugin.SYMBOL);
        if ($.isEmpty()) return;
        scope.set('$source', 'code', tree.isObject());

    }

}
SourcePlugin.Symbol = 'visual:source';
export default SourcePlugin