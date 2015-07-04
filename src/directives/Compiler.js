/**
 * Compiler compiles a tree of types into an object tree.
 *
 * The object tree is expected to be something usable for rendering
 * a ui.
 */
class Compiler{

    constructor(types) {
        this.types = types;
    }

    compile(tree) {

        if(!Array.isArray(tree))
        tree = [tree];

        var ret = tree.map(function(node) {
            return this.types.getTypeFor(node.type).compile(node);
        }.bind(this));

        if(ret.length === 1) return ret[0];
        return ret;
    }

}

export default Compiler
