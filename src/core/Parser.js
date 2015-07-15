
/**
 * Parser
 *
 */
class Parser {

    constructor(compiler, directives) {
        this.directives = directives;
        this.compiler = compiler;
    }

    parse(scope, tree) {

        if (typeof tree !== 'object') return tree;

        tree = scope.applySymbols(tree);

        this.directives.slice().map(function ($) {
            $.apply(tree, scope);
        });

        return this.compiler.compile(tree, scope, this);

    }


}

export default Parser