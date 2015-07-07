/**
 * CompileDirective
 */
class CompileDirective {

    constructor(compiler) {
      this.compiler = compiler;
    }

    apply(tree, scope) {

        var ret = this.compiler.compile(scope.applySymbols(tree));
        return ret;

    }
}

export default CompileDirective