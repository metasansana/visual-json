'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Tree = require('./Tree');

var _Tree2 = _interopRequireDefault(_Tree);

/**
 * Compiler
 */

var Compiler = (function () {
    function Compiler(env) {
        _classCallCheck(this, Compiler);

        this.env = env;
    }

    _createClass(Compiler, [{
        key: 'compile',
        value: function compile(tree, scope, index) {
            var _this = this;

            if (tree.isPrimitive()) return tree.toObject();

            if (tree.isArray()) return tree.map(function (branch, i) {
                return _this.env.parse(branch, scope.clone(), i);
            });

            tree.getDirectiveTreesBySymbol(Compiler.COMPILE_SYMBOL).map(function (branch) {
                return tree.set(branch.key, _this.env.parse(branch, scope.clone()));
            });

            tree.getDirectiveTreesBySymbol(Compiler.SOURCE_SYMBOL).map(function (branch) {
                return tree.set(branch.key, _this.env.getTypeByName(branch.toObject()).getSource());
            });

            tree.getDirectiveTreesBySymbol(Compiler.COMPILE_SWITCH_SYMBOL).map(function (stem) {

                var $case = stem.get('case');

                if (!$case) throw new Error('Compiler: To use a switch directive, you must have a \'case\' block!');

                stem.receiveSymbols(scope);

                var winner;
                var value = stem.get('value');
                $case = stem.get('case');

                winner = $case.hasOwnProperty(value) ? $case[value] : $case[stem.get('default')];

                if (!winner) throw new Error('compile_switch: No winner found!');

                if (stem.key === 'children') {
                    tree.set(stem.key, winner, scope.clone());
                } else {
                    tree.set(stem.key, _this.env.parse(new _Tree2['default'](winner, stem.key), scope.clone()));
                }
            });

            tree.receiveSymbols(scope);
            return this.env.getTypeByName(tree.get('type')).compile(tree, scope, this.env, index);
        }
    }]);

    return Compiler;
})();

Compiler.COMPILE_SYMBOL = 'compile:';
Compiler.COMPILE_SWITCH_SYMBOL = 'compile_switch:';
Compiler.COMPILE_IF_SYMBOL = 'compile_if:';
Compiler.SOURCE_SYMBOL = 'src:';
exports['default'] = Compiler;
module.exports = exports['default'];