'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Utils = require('./Utils');

var _Utils2 = _interopRequireDefault(_Utils);

/**
 * Tree represents the json tree that we used to build our views.
 * @param {Object} The raw json
 * @param {String} key
 */

var Tree = (function () {
    function Tree(json, key) {
        _classCallCheck(this, Tree);

        this.schema = json;
        this.key = key;
    }

    _createClass(Tree, [{
        key: 'get',
        value: function get(key) {
            return this.schema[key];
        }
    }, {
        key: 'getTree',
        value: function getTree(key) {
            return new Tree(this.schema[key], key);
        }
    }, {
        key: 'set',
        value: function set(key, value) {
            this.schema[key] = value;
            return this;
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty() {

            if (!this.schema) return false;

            if (this.isArray()) return this.schema.length < 1;

            if (this.isObject()) return Object.keys(this.schema).length < 1;

            return this.schema;
        }
    }, {
        key: 'isPrimitive',
        value: function isPrimitive() {
            return typeof this.schema !== 'object';
        }
    }, {
        key: 'isArray',
        value: function isArray() {
            return Array.isArray(this.schema);
        }
    }, {
        key: 'isObject',
        value: function isObject() {
            if (!this.schema) return false;
            return typeof this.schema === 'object' && !Array.isArray(this.schema);
        }
    }, {
        key: 'toObject',

        /**
         * toObject returns a copy of the internal json tree.
         * If the tree is a primitive, it is returned.
         * If the tree is an array, Array#slice() is returned
         * If the tree is an object, it is stripped of any directive keys (keys with ':') and a new object returned.
         * @returns {*}
         */
        value: function toObject() {
            var _this = this;

            if (this.isArray()) return this.schema.slice();

            if (this.isObject()) {
                var keys = Object.keys(this.schema).filter(function (key) {
                    return key.indexOf(':') < 0;
                });
                var ret = {};
                keys.forEach(function (key) {
                    return ret[key] = _this.schema[key];
                });
                return ret;
            }

            return this.schema;
        }
    }, {
        key: 'map',
        value: function map(cb) {
            if (this.isEmpty()) return;
            var json = this.isArray() ? this.schema : [this.schema];
            return json.map(function (schema, key) {
                return new Tree(schema, key);
            }).map(cb);
        }
    }, {
        key: 'forEachKey',
        value: function forEachKey(cb) {

            for (var key in this.schema) if (this.schema.hasOwnProperty(key)) cb(this.schema[key], key);
        }
    }, {
        key: 'receiveSymbols',
        value: function receiveSymbols(scope) {
            this.schema = scope.applySymbols(this.schema);
        }
    }, {
        key: 'getDirectiveTreesBySymbol',
        value: function getDirectiveTreesBySymbol(symbol) {

            return Object.keys(this.schema).map((function (key) {
                if (_Utils2['default'].startsWith(key, symbol)) return new Tree(this.schema[key], key.split(':').pop());
                return false;
            }).bind(this)).filter(function (v) {
                return v;
            });
        }
    }, {
        key: 'getDirectiveTreeBySymbol',
        value: function getDirectiveTreeBySymbol(symbol) {

            for (var key in this.schema) if (this.schema.hasOwnProperty(key)) if (_Utils2['default'].startsWith(key, symbol)) return new Tree(this.schema[key], key.split(':').pop());

            return new Tree(null, null);
        }
    }]);

    return Tree;
})();

exports['default'] = Tree;
module.exports = exports['default'];