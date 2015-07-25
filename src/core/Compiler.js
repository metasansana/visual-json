import Tree from './Tree';
/**
 * Compiler
 */
class Compiler {

    constructor(env) {
        this.env = env;
    }

    compile(tree, scope) {

        if (tree.isPrimitive()) return tree.toObject();

        if (tree.isArray())
            return tree.map(branch=>this.env.parse(branch, scope.clone()));

        tree.getDirectiveTreesBySymbol(Compiler.COMPILE_SYMBOL).
            map(branch=>tree.set(branch.key, this.env.parse(branch, scope.clone())));

        tree.getDirectiveTreesBySymbol(Compiler.SOURCE_SYMBOL).
            map(branch=>tree.set(branch.key, this.env.getTypeByName(branch.toObject()).getSource()));

        tree.getDirectiveTreesBySymbol(Compiler.COMPILE_SWITCH_SYMBOL).
            map(stem=> {

                var $case = stem.get('case');

                if (!$case)
                    throw new Error('Compiler: To use a switch directive, you must have a \'case\' block!');

                stem.receiveSymbols(scope);

                var winner;
                var value = stem.get('value');
                var $case = stem.get('case');

                winner = ($case.hasOwnProperty(value)) ?
                    $case[value] : $case[stem.get('default')];

                if (!winner) throw new Error('compile_switch: No winner found!');

                if (stem.key === 'children') {
                    tree.set(stem.key, new Tree(winner, stem.key), scope.clone());
                } else {
                    tree.set(stem.key, this.env.parse(new Tree(winner, stem.key), scope.clone()));
                }

            });

        tree.receiveSymbols(scope);

        return this.env.getTypeByName(tree.get('type')).
            compile(tree, scope, this.env);

    }


}

Compiler.COMPILE_SYMBOL = 'compile:';
Compiler.COMPILE_SWITCH_SYMBOL = 'compile_switch:';
Compiler.COMPILE_IF_SYMBOL = 'compile_if:';
Compiler.SOURCE_SYMBOL = 'src:';

export default Compiler