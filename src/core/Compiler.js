/**
 * Compiler
 */
class Compiler {

    constructor(env) {
        this.env = env;
    }

    compile(tree, scope, parser) {

        tree = (Array.isArray(tree)) ? tree : [tree];

        var compiled  = tree.map(function (node, number) {

            if (typeof node !== 'object') return node;
            return this.env.getTypeByName(node.type).compile(node, scope, parser, number);

        }.bind(this));

        return (compiled.length === 1)? compiled[0] : compiled;

    }


}

export default Compiler