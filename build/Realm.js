'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

var _Parser = require('./Parser');

var _Parser2 = _interopRequireDefault(_Parser);

var _Compiler = require('./Compiler');

var _Compiler2 = _interopRequireDefault(_Compiler);

var _types = require('./types');

var _types2 = _interopRequireDefault(_types);

var _filters = require('./filters');

var _filters2 = _interopRequireDefault(_filters);

/**
 * Realm
 */

var Realm = (function () {
    function Realm(types, filters, cache) {
        _classCallCheck(this, Realm);

        this.types = types || {};
        this.filters = filters || {};
        this.cache = cache || {};
    }

    _createClass(Realm, [{
        key: 'addFilters',

        /**
         *
         * @param {Object} filters
         * @returns {Realm}
         */
        value: function addFilters(filters) {
            this.filters = (0, _merge2['default'])(this.filters, filters);
            return this;
        }
    }, {
        key: 'addTypes',

        /**
        *
        * @param {Object} types
        * @returns {Realm}
        */
        value: function addTypes(types) {
            this.types = (0, _merge2['default'])(this.types, types);
            return this;
        }
    }, {
        key: 'addCache',
        value: function addCache(cache) {
            this.cache = (0, _merge2['default'])(this.cache, cache);
            return this;
        }
    }, {
        key: 'getParser',

        /**
         *
         * @param {Object} json
         * @param {Object} ctx
         * @returns {Parser}
         */
        value: function getParser(ctx) {
            return new _Parser2['default'](new _Compiler2['default'](this.types, this.filters, this.cache || {}), ctx);
        }
    }]);

    return Realm;
})();

Realm.getDefaultRealm = function () {
    return new Realm(_types2['default'], _filters2['default']);
};

exports['default'] = Realm;
module.exports = exports['default'];