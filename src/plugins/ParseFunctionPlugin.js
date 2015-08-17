/**
 * ParseFunctionPlugin
 *
 * This plugin supplies keys with a function that can be called later for parsing
 * a tree.
 *
 * {
 *   "type": "button",
 *   "parse:onClick": {"type":"modal", "body": "Something clicked!"}
 * }
 * @param {Environment} env
 */
class ParseFunctionPlugin {

    constructor(env) {
        this.env = env;
    }

    /**
     * @param {Tree} tree
     * @param {Scope} scope
     */
    apply(tree, scope) {
        tree.getDirectiveTreesBySymbol(ParseFunctionPlugin.SYMBOL).
            map(branch=>tree.set(branch.key, x=>this.env.parse(branch, scope.clone())));
    }
}

ParseFunctionPlugin.SYMBOL='parse:';
export default ParseFunctionPlugin