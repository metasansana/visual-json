'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _jhr = require('jhr');

var _jhr2 = _interopRequireDefault(_jhr);

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

var _Scope = require('./Scope');

var _Scope2 = _interopRequireDefault(_Scope);

var _SymbolParser = require('./SymbolParser');

var _SymbolParser2 = _interopRequireDefault(_SymbolParser);

var _directivesResourceDirective = require('../directives/ResourceDirective');

var _directivesResourceDirective2 = _interopRequireDefault(_directivesResourceDirective);

var _directivesSetDirective = require('../directives/SetDirective');

var _directivesSetDirective2 = _interopRequireDefault(_directivesSetDirective);

var _directivesRequestDirective = require('../directives/RequestDirective');

var _directivesRequestDirective2 = _interopRequireDefault(_directivesRequestDirective);

var _directivesCompileDirective = require('../directives/CompileDirective');

var _directivesCompileDirective2 = _interopRequireDefault(_directivesCompileDirective);

var _directivesParseDirective = require('../directives/ParseDirective');

var _directivesParseDirective2 = _interopRequireDefault(_directivesParseDirective);

var _UnknownDirectiveError = require('./UnknownDirectiveError');

var _UnknownDirectiveError2 = _interopRequireDefault(_UnknownDirectiveError);

var _UnknownTypeError = require('./UnknownTypeError');

var _UnknownTypeError2 = _interopRequireDefault(_UnknownTypeError);

/**
 * Environment
 */

var Environment = (function () {
    function Environment(types) {
        _classCallCheck(this, Environment);

        var agent = _jhr2['default'].createAgent();

        this.directives = {
            $resource: new _directivesResourceDirective2['default'](agent),
            $set: new _directivesSetDirective2['default'](),
            $request: new _directivesRequestDirective2['default'](agent),
            $compile: new _directivesCompileDirective2['default'](this),
            $parse: new _directivesParseDirective2['default'](['$resource', '$set', '$request', '$compile', '$parse'], this)
        };

        this.envCtx = {
            $window: window,
            $document: document,
            $env: {}
        };

        this.types = types || {};
    }

    _createClass(Environment, [{
        key: 'getDirectiveByName',
        value: function getDirectiveByName(name) {
            if (!this.directives.hasOwnProperty(name)) throw new _UnknownDirectiveError2['default'](name);
            return this.directives[name];
        }
    }, {
        key: 'getTypeByName',
        value: function getTypeByName(name) {
            if (!this.types.hasOwnProperty(name)) throw new _UnknownTypeError2['default'](name);
            return this.types[name];
        }
    }, {
        key: 'addVar',
        value: function addVar(key, name) {
            this.envCtx.env[key] = name;
            return this;
        }
    }, {
        key: 'addType',
        value: function addType(key, name) {
            this.types[key] = name;
            return this;
        }
    }, {
        key: 'parse',
        value: function parse(tree, self, locals) {

            return this.getDirectiveByName('$parse').apply(tree, new _Scope2['default'](this.envCtx, { $self: self, $local: locals || {} }, new _SymbolParser2['default']()));
        }
    }, {
        key: 'parseWithResource',
        value: function parseWithResource(tree, self, locals, cb) {
            return this.getDirectiveByName('$parse').applyWithResource(tree, new _Scope2['default'](this.envCtx, { $self: self, $local: locals || {} }, new _SymbolParser2['default']()), cb);
        }
    }]);

    return Environment;
})();

exports['default'] = Environment;
module.exports = exports['default'];