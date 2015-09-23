/**
 * Parser
 */
class Parser {

    constructor(env) {
        this.env = env;
    }

    parse(tree, scope, count) {

        if (tree.isPrimitive()) return tree.toObject();

        if (tree.isObject()) {
            if (tree.getDirectiveTreeBySymbol(Parser.IGNORE_SYMBOL).toObject()) return;
            this.env.getPlugins().map(($) => $.apply(tree, scope));
        }

        return this.env.compile(tree, scope, count);
    }
}

Parser.IGNORE_SYMBOL = 'visual:ignore';
Parser.SET_SYMBOL = 'visual:set';
export default Parser
