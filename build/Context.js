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

/**
 * Context
 */

var Context = (function () {
    function Context() {
        _classCallCheck(this, Context);

        this.filters = {};
        this.handlers = {};
        this.types = {};
    }

    _createClass(Context, [{
        key: 'addFilters',

        /**
         *
         * @param {Object} filters
         * @returns {Context}
         */
        value: function addFilters(filters) {
            this.filters = (0, _merge2['default'])(this.filters, filters);
            return this;
        }
    }, {
        key: 'addHandlers',

        /**
         *
         * @param {Object}handlers
         * @returns {Context}
         */
        value: function addHandlers(handlers) {
            this.handlers = (0, _merge2['default'])(this.handlers, handlers);
            return this;
        }
    }, {
        key: 'addTypes',

        /**
         *
         * @param {Object} types
         * @returns {Context}
         */
        value: function addTypes(types) {
            this.types = (0, _merge2['default'])(this.types, types);
            return this;
        }
    }, {
        key: 'generate',

        /**
         *
         * @param {Object} json
         * @param {Object} ctx
         * @returns {React.Element}
         */
        value: function generate(json, ctx) {

            var parser = new _Parser2['default']();
            return parser.parse(json, ctx, new _Compiler2['default'](this.types));
        }
    }]);

    return Context;
})();

exports['default'] = Context;
module.exports = exports['default'];