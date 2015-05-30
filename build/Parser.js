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
        key: 'parseObjectLike',
        value: function parseObjectLike(schema, ctx, compiler) {

            if (Array.isArray(schema)) return this.parseArray(schema, ctx, compiler);

            if (typeof schema === 'object') return this.parseObject(schema, ctx, compiler);

            return schema;
        }
    }, {
        key: 'parseArray',
        value: function parseArray(schema, ctx, compiler) {
            return schema.map((function (scheme) {
                return this.parseObjectLike(scheme, ctx, compiler);
            }).bind(this));
        }
    }, {
        key: 'parseObject',
        value: function parseObject(schema, ctx, compiler) {

            for (var key in schema) {
                if (schema.hasOwnProperty(key)) {

                    if (schema.$$NO_DEEP_PARSE !== true) schema[key] = this.parseObjectLike(schema[key], ctx, compiler);

                    schema = compiler.swapSymbolAndParse(key, schema, ctx, this.parseObjectLike.bind(this));
                    schema = compiler.swapTemplateStrings(key, schema, ctx);
                    schema = compiler.callAndSwapSymbol(key, schema, ctx);
                    schema = compiler.swapSymbol(key, schema, ctx);
                    schema = compiler.swapFilter(key, schema, ctx);
                    schema = compiler.eagerCompile(key, schema, ctx);
                    schema = compiler.eagerCompileArray(key, schema, ctx);
                }
            }

            if (schema.$$parse) {

                schema.parse = (function (parser, ctx, compiler) {
                    return function (schema) {
                        return compiler.compile(parser.parseObjectLike(JSON.parse(JSON.stringify(schema)), ctx, compiler));
                    };
                })(this, ctx, compiler);

                delete schema.$$parse;
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

            schema = this.parseObject(JSON.parse(JSON.stringify(schema)), ctx, compiler);
            return compiler.compile(schema);
        }
    }]);

    return Parser;
})();

exports['default'] = Parser;
module.exports = exports['default'];