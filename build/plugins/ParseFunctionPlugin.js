/**
 * ParseFunctionPlugin
 *
 * This plugin supplies keys with a function that can be called later for parsing
 * a tree.
 *
 * {
 *   "type": "button",
 *   "parse:onClick": {"type":"modal", "body": "Something clicked!"}
 * }
 * @param {Environment} env
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ParseFunctionPlugin = (function () {
    function ParseFunctionPlugin(env) {
        _classCallCheck(this, ParseFunctionPlugin);

        this.env = env;
    }

    _createClass(ParseFunctionPlugin, [{
        key: 'apply',

        /**
         * @param {Tree} tree
         * @param {Scope} scope
         */
        value: function apply(tree, scope) {
            var _this = this;

            tree.getDirectiveTreesBySymbol(ParseFunctionPlugin.SYMBOL).map(function (branch) {
                return tree.set(branch.key, function (x) {
                    return _this.env.parse(branch, scope.clone());
                });
            });
        }
    }]);

    return ParseFunctionPlugin;
})();

ParseFunctionPlugin.SYMBOL = 'parse:';
exports['default'] = ParseFunctionPlugin;
module.exports = exports['default'];