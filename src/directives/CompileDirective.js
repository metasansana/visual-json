/**
 * CompileDirective
 */
class CompileDirective {

    constructor(env) {
      this.env = env;
    }

    compile(tree, scope) {

        if(!Array.isArray(tree))
            tree = [tree];

        var ret = tree.map(function(node, key) {
            if(typeof node !== 'object') return node;
            return this.env.getTypeByName(node.type).compile(node, scope, this, key);
        }.bind(this));

        if(ret.length === 1) return ret[0];
        return ret;
    }

    apply(tree, scope) {
        return this.compile(scope.applySymbols(tree), scope);
    }
}

export default CompileDirective