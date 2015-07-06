/**
 * CompileDirective
 */
class CompileDirective {

    constructor(compiler) {
      this.compiler = compiler;
    }

    apply(tree, scope, done) {

        done(this.compiler.compile(scope.applySymbols(tree)));

    }
}

export default CompileDirective