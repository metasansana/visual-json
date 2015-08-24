'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _propertySeek = require('property-seek');

var _propertySeek2 = _interopRequireDefault(_propertySeek);

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

        this.env = compiler;
        this.context = context;
        this.number = 0;
    }

    _createClass(Parser, [{
        key: 'parseObjectLike',
        value: function parseObjectLike(schema, context) {

            if (Array.isArray(schema)) return this.parseArray(schema, context);

            if (typeof schema === 'object') return this.parseObject(schema, context);

            return schema;
        }
    }, {
        key: 'parseArray',
        value: function parseArray(schema, context) {
            return schema.map((function (scheme, key) {
                if (scheme.type) scheme.key = key;
                return this.parse(scheme, context);
            }).bind(this));
        }
    }, {
        key: 'parseObject',
        value: function parseObject(schema, context) {

            for (var key in schema) {
                if (schema.hasOwnProperty(key)) {

                    schema = this.env.swapTemplate(key, schema, context);
                    schema = this.env.swapSymbolAndParse(key, schema, context, this.parseObject.bind(this));
                    schema = this.env.callAndSwapSymbol(key, schema, context);
                    schema = this.env.swapSymbol(key, schema, context);
                    schema = this.env.eagerCompile(key, schema, context);
                    schema = this.env.eagerCompileArray(key, schema, context);

                    if (this.env.hasSymbol(key, '$->')) {
                        schema[this.env.cut(key, '$->')] = this.parseObjectLike(schema[key], context);
                        delete schema[key];
                    }
                }
            }

            if (schema.type) {
                this.number++;
                schema.$parser = this;
                schema.$context = context;
                schema.$number = this.number;
                schema.$template = this.template.bind(this);
                schema.$filter = this.env.filter.bind(this.env);
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
            return this.env.template(value, context);
        }
    }, {
        key: 'filter',
        value: function filter() {
            return this.env.filter.apply(this.env, arguments);
        }
    }, {
        key: 'cloneProps',

        /**
         * cloneProp can be used to clone props but removes any '$' values.
         * @param {Object} schema
         * @param {Object} props
         * @returns {Object}
         */
        value: function cloneProps(schema, props) {

            props = props || schema;
            var o = {};

            for (var key in schema) if (schema.hasOwnProperty(key)) if (props.hasOwnProperty(key)) if (key[0] !== '$') o[key] = schema[key];

            return o;
        }
    }, {
        key: 'parse',

        /**
         *
         * @param {Object|Array} schema The schema for the item being processed
         * @param {Context} context
         * @returns {*}
         */
        value: function parse(schema, context) {
            if (!schema) return schema;
            schema = this.parseObjectLike(JSON.parse(JSON.stringify(schema)), context || this.context);
            if (typeof schema !== 'object' || Array.isArray(schema)) return schema;
            return this.env.compile(schema);
        }
    }]);

    return Parser;
})();

exports['default'] = Parser;
module.exports = exports['default'];