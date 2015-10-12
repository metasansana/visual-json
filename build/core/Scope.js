'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _propertySeek = require('property-seek');

var _propertySeek2 = _interopRequireDefault(_propertySeek);

var _Tree = require('./Tree');

var _Tree2 = _interopRequireDefault(_Tree);

/**
 * Scope retains all the variable information during parsing.
 *
 * Directives interact with this class to store and retrieve information.
 * @param {Object} globalCtx
 * @param {Object} localCtx
 * @param {SymbolParser} symbolParser
 */

var Scope = (function () {
    function Scope(envCtx, localCtx, symbolParser, env) {
        _classCallCheck(this, Scope);

        this.envCtx = envCtx;
        this.localCtx = localCtx;
        this.symbolParser = symbolParser;
        this.env = env;
    }

    _createClass(Scope, [{
        key: 'clone',

        /**
         * clone provides a new Scope with a copy of this one's global and local context.
         * @returns {Scope}
         */
        value: function clone() {
            var newLocal = {};
            for (var key in this.localCtx) if (this.localCtx.hasOwnProperty(key)) newLocal[key] = this.localCtx[key];
            return new Scope(this.envCtx, newLocal, this.symbolParser, this.env);
        }
    }, {
        key: 'replaceSelf',
        value: function replaceSelf(self) {
            this.localCtx.$self = self;
            return this;
        }
    }, {
        key: 'getSelf',
        value: function getSelf() {
            return this.localCtx.$self;
        }
    }, {
        key: 'set',

        /**
         * set puts a value into localCtx.
         *
         * This value will be available to the current parsing stack only.
         * @param dest The directive to store this value (eg : $request, $resource)
         * @param key The key name of this value
         * @param value The value
         * @returns {Scope}
         */
        value: function set(dest, key, value) {
            this.localCtx[dest] = this.localCtx[dest] || {};
            this.localCtx[dest][key] = value;
            return this;
        }
    }, {
        key: 'resolve',

        /**
         * resolve turns a path string into a value stored in either localCtx or globalCtx
         * @param path
         * @returns {*|null}
         */
        value: function resolve(path) {

            var value;

            if (!path) path = '$self';

            if (path[0] !== '$') path = '$self.' + path;

            if (this.symbolParser.startsWith('$types', path)) {
                value = _propertySeek2['default'].get(this.envCtx, path);
                return value.getSource();
            }

            value = _propertySeek2['default'].get(this.localCtx, path);
            if (value !== undefined) return value;

            value = _propertySeek2['default'].get(this.envCtx, path);
            if (value !== undefined) return value;
        }
    }, {
        key: 'applySymbols',
        value: function applySymbols(tree) {
            return this.symbolParser.parse(tree, this);
        }
    }, {
        key: 'parse',
        value: function parse(schema) {

            return this.env.parse(new _Tree2['default'](schema), this);
        }
    }]);

    return Scope;
})();

exports['default'] = Scope;
module.exports = exports['default'];