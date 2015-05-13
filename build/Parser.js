'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _dotComponent = require('dot-component');

var _dotComponent2 = _interopRequireDefault(_dotComponent);

var _Compiler = require('./Compiler');

var _Compiler2 = _interopRequireDefault(_Compiler);

/**
 * Parser
 */

var Parser = (function () {
    function Parser() {
        _classCallCheck(this, Parser);
    }

    _createClass(Parser, [{
        key: 'parseFilters',

        /**
         * parseFilters filters a value based on a '\' delimited string of filters.
         * @param {*} value
         * @param {String} list
         * @param {Object} context
         * @param {Function} cb
         * @returns {*}
         */
        value: function parseFilters(value, list, context) {

            if (!list) return value;

            var self = this;

            var filters = list.split('|').map(function (str) {
                return str.trim().split(' ');
            });

            var next = function next(thisValue) {

                if (filters.length < 1) return thisValue;

                var nextFilterArray = filters.shift();
                var nextFilterMethodName = nextFilterArray.shift();

                if (!self.filters.hasOwnProperty(nextFilterMethodName)) throw new Error('Unknown filter ' + nextFilterMethodName + '!');

                nextFilterArray.unshift(thisValue);
                nextFilterArray.push(context);
                nextFilterArray.push(next);
                return self.filters[nextFilterMethodName].apply(self.filters, nextFilterArray);
            };

            return next(value);
        }
    }, {
        key: 'parseObjectLike',
        value: function parseObjectLike(schema, ctx, compiler) {

            if (Array.isArray(schema)) return this.parseArray(schema, ctx, compiler);

            if (typeof schema === 'object') return this.parseObject(schema, ctx, compiler);

            return schema;
        }
    }, {
        key: 'parseArray',
        value: function parseArray(schema, ctx, compiler) {
            return schema.map((function (scheme, i) {
                return this.parseObjectLike(scheme, ctx, compiler);
            }).bind(this));
        }
    }, {
        key: 'parseObject',
        value: function parseObject(schema, ctx, compiler) {

            for (var key in schema) {
                if (schema.hasOwnProperty(key)) {

                    schema[key] = this.parseObjectLike(schema[key], ctx, compiler);
                    schema = compiler.swapSymbol(key, schema, ctx);
                    schema = compiler.callAndSwapSymbol(key, schema, ctx);
                    schema = compiler.eagerCompile(key, schema, ctx);
                    schema = compiler.eagerCompileArray(key, schema, ctx);
                }
            }

            return schema;
        }
    }, {
        key: 'parse',

        /**
         *
         * @param {Object|Array} schema The schema for the item being processed
         * @param {Object} defaults A map of key value pairs that can be queried for default values
         * @param {Object} ctx
         * @param {Compiler} compiler
         * @returns {Something}
         */
        value: function parse(schema, ctx, compiler) {

            schema = this.parseObjectLike(JSON.parse(JSON.stringify(schema)), ctx, compiler);
            return compiler.compile(schema);
        }
    }]);

    return Parser;
})();

exports['default'] = Parser;
module.exports = exports['default'];