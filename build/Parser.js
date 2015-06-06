'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _dotAccess = require('dot-access');

var _dotAccess2 = _interopRequireDefault(_dotAccess);

var _strtpl = require('strtpl');

var _strtpl2 = _interopRequireDefault(_strtpl);

var _Compiler = require('./Compiler');

var _Compiler2 = _interopRequireDefault(_Compiler);

/**
 * Parser
 */

var Parser = (function () {
    function Parser(compiler, context) {
        _classCallCheck(this, Parser);

        this.compiler = compiler;
        this.context = context;
        this.number = 0;
    }

    _createClass(Parser, [{
        key: 'parseObjectLike',
        value: function parseObjectLike(schema) {

            if (Array.isArray(schema)) return this.parseArray(schema);

            if (typeof schema === 'object') return this.parseObject(schema);

            return schema;
        }
    }, {
        key: 'parseArray',
        value: function parseArray(schema) {
            return schema.map((function (scheme, key) {
                if (scheme.type) scheme.key = key;
                return this.parse(scheme);
            }).bind(this));
        }
    }, {
        key: 'parseObject',
        value: function parseObject(schema) {

            var context = this.context;

            for (var key in schema) {
                if (schema.hasOwnProperty(key)) {

                    schema = this.compiler.swapSymbolAndParse(key, schema, context, this.parseObject.bind(this));
                    schema = this.compiler.callAndSwapSymbol(key, schema, context);
                    schema = this.compiler.swapSymbol(key, schema, context);
                    schema = this.compiler.swapFilter(key, schema, context);
                    schema = this.compiler.eagerCompile(key, schema, context);
                    schema = this.compiler.eagerCompileArray(key, schema, context);

                    if (this.compiler.hasSymbol(key, '$->')) {
                        schema[this.compiler.cut(key, '$->')] = this.parseObjectLike(schema[key]);
                        delete schema[key];
                    }
                }
            }

            if (schema.type) {
                this.number++;
                schema.$parser = this;
                schema.$context = this.context;
                schema.$number = this.number;
                schema.$template = this.template.bind(this);
                schema.$filter = this.compiler.filter.bind(this.compiler);
            }

            return schema;
        }
    }, {
        key: 'template',

        /**
         * template swaps value between {{ }} for some value on the context.
         * @param value
         * @param context
         */
        value: function template(value, context) {
            context = context || this.context;
            return (0, _strtpl2['default'])(value, context);
        }
    }, {
        key: 'filter',
        value: function filter() {
            return this.compiler.filter.apply(this.compiler, arguments);
        }
    }, {
        key: 'cloneProps',

        /**
         * cloneProp can be used to clone props but removes any '$' values.
         * @param schema
         * @returns {Object}
         */
        value: function cloneProps(schema) {

            var o = {};

            for (var key in schema) if (schema.hasOwnProperty(key)) if (key[0] !== '$') o[key] = schema[key];

            return o;
        }
    }, {
        key: 'parse',

        /**
         *
         * @param {Object|Array} schema The schema for the item being processed
         * @param {Compiler} compiler
         * @returns {*}
         */
        value: function parse(schema) {
            if (!schema) return schema;
            schema = this.parseObjectLike(JSON.parse(JSON.stringify(schema)));
            if (typeof schema !== 'object' || Array.isArray(schema)) return schema;
            return this.compiler.compile(schema);
        }
    }]);

    return Parser;
})();

exports['default'] = Parser;
module.exports = exports['default'];