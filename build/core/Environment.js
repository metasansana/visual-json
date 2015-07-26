'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Tree = require('./Tree');

var _Tree2 = _interopRequireDefault(_Tree);

var _Scope = require('./Scope');

var _Scope2 = _interopRequireDefault(_Scope);

var _SymbolParser = require('./SymbolParser');

var _SymbolParser2 = _interopRequireDefault(_SymbolParser);

var _pluginsSetPlugin = require('../plugins/SetPlugin');

var _pluginsSetPlugin2 = _interopRequireDefault(_pluginsSetPlugin);

var _UnknownTypeError = require('./UnknownTypeError');

var _UnknownTypeError2 = _interopRequireDefault(_UnknownTypeError);

var _Compiler = require('./Compiler');

var _Compiler2 = _interopRequireDefault(_Compiler);

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

/**
 * Environment
 */

var Environment = (function () {
    function Environment(types) {
        _classCallCheck(this, Environment);

        this.types = types || {};
        this.plugins = [new _pluginsSetPlugin2['default']()];
        this.compiler = new _Compiler2['default'](this);
        this.parser = new _Parser2['default'](this);
        this.envCtx = {
            $window: window,
            $document: document,
            $env: {}
        };
    }

    _createClass(Environment, [{
        key: 'addType',
        value: function addType(key, name) {
            this.types[key] = name;
            return this;
        }
    }, {
        key: 'addVar',
        value: function addVar(key, name) {
            this.envCtx[key] = name;
            return this;
        }
    }, {
        key: 'addPlugin',
        value: function addPlugin(directive) {
            this.plugins.push(directive);
            return this;
        }
    }, {
        key: 'getTypeByName',
        value: function getTypeByName(name) {
            if (!this.types.hasOwnProperty(name)) throw new _UnknownTypeError2['default'](name);
            return this.types[name];
        }
    }, {
        key: 'getPlugins',
        value: function getPlugins() {
            return this.plugins.slice();
        }
    }, {
        key: 'getScope',
        value: function getScope(self, locals) {
            return new _Scope2['default'](this.envCtx, { $self: self, $local: locals || {} }, new _SymbolParser2['default']());
        }
    }, {
        key: 'parse',
        value: function parse(tree, scope) {
            return this.parser.parse(tree, scope);
        }
    }, {
        key: 'parseFromObject',
        value: function parseFromObject(o, scope) {
            return this.parser.parse(new _Tree2['default'](o), scope);
        }
    }, {
        key: 'compile',
        value: function compile(tree, scope) {
            return this.compiler.compile(tree, scope);
        }
    }, {
        key: 'generate',
        value: function generate(tree, self, locals) {
            return this.parser.parse(new _Tree2['default'](tree, null), this.getScope(self, locals));
        }
    }]);

    return Environment;
})();

exports['default'] = Environment;
module.exports = exports['default'];