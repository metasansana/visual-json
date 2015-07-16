/**
 * Parser
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Parser = (function () {
    function Parser(env) {
        _classCallCheck(this, Parser);

        this.env = env;
    }

    _createClass(Parser, [{
        key: 'parse',
        value: function parse(tree, scope) {

            if (tree.isPrimitive()) return tree.toObject();

            if (tree.isObject()) {

                if (tree.getDirectiveTreeBySymbol(Parser.IGNORE_SYMBOL).toObject()) return;

                this.env.getPlugins().map(function ($) {
                    $.apply(tree, scope);
                });
            }

            return this.env.compile(tree, scope);
        }
    }]);

    return Parser;
})();

Parser.IGNORE_SYMBOL = 'visual:ignore';
Parser.SET_SYMBOL = 'visual:set';
exports['default'] = Parser;
module.exports = exports['default'];