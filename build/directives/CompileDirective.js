/**
 * CompileDirective
 */
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CompileDirective = (function () {
    function CompileDirective(env) {
        _classCallCheck(this, CompileDirective);

        this.env = env;
    }

    _createClass(CompileDirective, [{
        key: "compile",
        value: function compile(tree, scope) {

            if (!Array.isArray(tree)) tree = [tree];

            var ret = tree.map((function (node, key) {
                return this.env.getTypeByName(node.type).compile(node, scope, this, key);
            }).bind(this));

            if (ret.length === 1) return ret[0];
            return ret;
        }
    }, {
        key: "apply",
        value: function apply(tree, scope) {
            return this.compile(scope.applySymbols(tree), scope);
        }
    }]);

    return CompileDirective;
})();

exports["default"] = CompileDirective;
module.exports = exports["default"];