'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _dotAccess = require('dot-access');

var _dotAccess2 = _interopRequireDefault(_dotAccess);

var OPERATORS = {
    '==': function _(x, y) {
        return x === y;
    },
    '!=': function _(x, y) {
        return x != y;
    },
    '>': function _(x, y) {
        return x > y;
    },
    '>=': function _(x, y) {
        return x >= y;
    },
    '<': function _(x, y) {
        return x < y;
    },
    '<=': function _(x, y) {
        return x <= y;
    },
    '-': function _(x, y) {
        return x - y;
    },
    '+': function _(x, y) {
        return x + y;
    }
};

/**
 * SymbolParser is used for populating a tree with
 * keyword symbols.
 */

var SymbolParser = (function () {
    function SymbolParser() {
        _classCallCheck(this, SymbolParser);

        this.SYMBOLS = {
            SWAP: '@',
            STEP: '->',
            TEMPLATE: '^',
            EVALUATE: '=',
            DIRECTIVE: '@$'
        };
    }

    _createClass(SymbolParser, [{
        key: '_stringToArgs',
        value: function _stringToArgs(str, scope) {

            return str.substring(str.indexOf('(') + 1, str.length - 1).split(',').map(function (val) {
                if (typeof val === 'string') if (!val[0] === '\'') {
                    val = scope.resolve(val);
                } else {
                    val = val.replace(/'/g, '');
                }
                return val;
            });
        }
    }, {
        key: '_clean',
        value: function _clean(value) {

            for (var key in this.SYMBOLS) if (this.SYMBOLS.hasOwnProperty(key)) {
                if (this.startsWith(this.SYMBOLS[key], value)) value = value.replace(this.SYMBOLS[key], '');
            }

            return value;
        }
    }, {
        key: 'evaluate',
        value: function evaluate(str, scope) {

            var exp = str.split(' ');
            if (exp.length === 1) return scope.resolve(exp[0]);

            if (!OPERATORS.hasOwnProperty(exp[1])) throw new Error('evaluate(): Unknown operator: ' + exp[1] + ' !');
            return OPERATORS[exp[1]](scope.resolve(exp[0]), scope.resolve(exp[2]));
        }
    }, {
        key: 'endsWith',
        value: function endsWith(searchString, subjectString, position) {

            if (position === undefined || position > subjectString.length) {
                position = subjectString.length;
            }
            position -= searchString.length;
            var lastIndex = subjectString.indexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
        }
    }, {
        key: 'startsWith',
        value: function startsWith(searchString, str, position) {
            position = position || 0;
            return str.indexOf(searchString, position) === position;
        }
    }, {
        key: 'hasKeySymbol',
        value: function hasKeySymbol(key) {

            var flag = false;

            for (var sym in this.SYMBOLS) if (this.SYMBOLS.hasOwnProperty(sym)) if (this.startsWith(this.SYMBOLS[sym], key)) flag = true;

            return flag;
        }
    }, {
        key: 'applyStep',
        value: function applyStep(key, value, scope, newKey, newTree) {

            if (this.startsWith(this.SYMBOLS.STEP, key)) newTree[newKey] = this.parse(value, scope);
        }
    }, {
        key: 'applySwap',
        value: function applySwap(key, value, scope, newKey, newTree) {

            var isCallable = false;
            var args;
            var applyAfter = false;

            if (this.startsWith(this.SYMBOLS.SWAP, key)) {

                if (value[0] === '@') {
                    value = value.slice(1);
                    applyAfter = true;
                }

                if (value[value.length - 1] === ')') isCallable = true;
                if (isCallable) args = this._stringToArgs(value, scope);

                var target = scope.resolve(isCallable ? value.substring(0, value.indexOf('(')) : value);

                if (typeof target === 'function') {

                    var paths = value.split('.');
                    paths.pop();

                    target = args ? target.bind.apply(target, [null].concat(args)) : target.bind(scope.resolve(paths.join('.')));
                }

                return newTree[newKey] = applyAfter ? this.parse(target, scope) : target;
            }
        }
    }, {
        key: 'applyDirectiveSwap',
        value: function applyDirectiveSwap(key, template, scope, newKey, newTree) {

            if (this.startsWith(this.SYMBOLS.DIRECTIVE.key)) {}
        }
    }, {
        key: 'applyTemplate',
        value: function applyTemplate(key, template, scope, newKey, newTree) {

            if (this.startsWith(this.SYMBOLS.TEMPLATE, key)) newTree[newKey] = template.replace(/\{\{([\w\$\.\-]*)}}/g, function (s, k) {
                return scope.resolve(k);
            });
        }
    }, {
        key: 'applyEval',
        value: function applyEval(key, value, scope, newKey, newTree) {

            if (this.startsWith(this.SYMBOLS.EVALUATE, key)) newTree[newKey] = this.evaluate(value, scope);
        }
    }, {
        key: 'parseObjectLike',
        value: function parseObjectLike(schema, scope) {

            if (Array.isArray(schema)) return this.parseArray(schema, scope);

            if (typeof schema === 'object') return this.parseObject(schema, scope);

            return schema;
        }
    }, {
        key: 'parseArray',
        value: function parseArray(schema, scope) {
            return schema.map((function (scheme, key) {
                if (scheme.type) scheme.key = key;
                return this.parse(scheme, scope);
            }).bind(this));
        }
    }, {
        key: 'parseObject',
        value: function parseObject(tree, scope) {

            var newTree = {};
            var newKey;

            for (var key in tree) if (tree.hasOwnProperty(key)) {

                if (this.hasKeySymbol(key)) {

                    newKey = this._clean(key);
                    this.applyStep(key, tree[key], scope, newKey, newTree);
                    this.applySwap(key, tree[key], scope, newKey, newTree);
                    this.applyTemplate(key, tree[key], scope, newKey, newTree);
                    this.applyEval(key, tree[key], scope, newKey, newTree);
                } else {

                    newTree[key] = tree[key];
                }
            }

            return newTree;
        }
    }, {
        key: 'parse',

        /**
         * @param {Object|Array} tree
         * @param {Scope} scope
         * @returns {*}
         */
        value: function parse(tree, scope) {
            return this.parseObjectLike(tree, scope);
        }
    }]);

    return SymbolParser;
})();

exports['default'] = SymbolParser;
module.exports = exports['default'];