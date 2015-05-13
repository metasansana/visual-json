'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _dotComponent = require('dot-component');

var _dotComponent2 = _interopRequireDefault(_dotComponent);

var KeyNotFoundOnContextError = (function (_Error) {
    function KeyNotFoundOnContextError(key) {
        _classCallCheck(this, KeyNotFoundOnContextError);

        _get(Object.getPrototypeOf(KeyNotFoundOnContextError.prototype), 'constructor', this).call(this, 'ParseContext does not have a key ' + key + '!');
    }

    _inherits(KeyNotFoundOnContextError, _Error);

    return KeyNotFoundOnContextError;
})(Error);

var inputs = {
    text: 1, date: 1, datetime: 1, range: 1, button: 1, color: 1, 'datetime-local': 1,
    email: 1, file: 1, hidden: 1, image: 1, month: 1, number: 1, password: 1, search: 1, tel: 1,
    time: 1, url: 1, week: 1
};

var cut = function cut(key, target) {
    return key.replace(target, '');
};

var SWAP_SYMBOL = '@';
var CALL_AND_SWAP_SYMBOL = '@@';
var BUILTIN_SYMBOL = '$$';
var EAGER_COMPILE_SYMBOL = '$$$';

/**
 * Compiler compiles things that were parsed.
 *
 * Default Symbols:
 *
 *  @:    Swap the value of this property with a value from context
 *  @@:    Swap the value with a function from context (the function is bind() to context first)
 *  $$:   Swap this value with a builtin value or function.
 *  $$$:  Process this property as a type or array of types.
 *
 *
 */

var Compiler = (function () {
    function Compiler(types) {
        _classCallCheck(this, Compiler);

        this.types = types;
    }

    _createClass(Compiler, [{
        key: 'swapSymbol',

        /**
         * swapSymbol
         *
         * @param {String} key
         * @param {Object}schema
         * @param {Object} ctx
         * @returns {*}
         */
        value: function swapSymbol(key, schema, ctx) {

            if (key.indexOf(SWAP_SYMBOL) > -1) {

                var desiredKey = schema[key];

                //if (!ctx.hasOwnProperty(desiredKey))
                //  if (desiredKey !== 'this')
                //    throw new KeyNotFoundOnContextError(desiredKey);

                if (desiredKey === 'this') {
                    schema[cut(key, SWAP_SYMBOL)] = ctx;
                } else if (typeof ctx[desiredKey] === 'function') {
                    schema[cut(key, SWAP_SYMBOL)] = ctx[desiredKey].bind(ctx);
                } else {
                    schema[cut(key, SWAP_SYMBOL)] = _dotComponent2['default'].get(ctx, desiredKey);
                }

                delete schema[key];
            }

            return schema;
        }
    }, {
        key: 'callAndSwapSymbol',

        /**
         * swapAndBindSymbol
         *
         * @param {String} key
         * @param {Object}schema
         * @param {Object} ctx
         * @returns {*}
         */
        value: function callAndSwapSymbol(key, schema, ctx) {

            if (key.indexOf(CALL_AND_SWAP_SYMBOL) > -1) {

                var desiredKey = schema[key];
                var args = desiredKey.split(',');
                desiredKey = args.shift();

                if (!ctx.hasOwnProperty(desiredKey)) throw new KeyNotFoundOnContextError(desiredKey);

                schema[cut(key, CALL_AND_SWAP_SYMBOL)] = ctx[desiredKey].apply(ctx, args);

                delete schema[key];
            }

            return schema;
        }
    }, {
        key: 'swapContextSymbol',

        /**
         * swapContextSymbol
         *
         * @param {String} key
         * @param {Object} schema
         * @param {Object} ctx
         * @returns {*}
         */
        value: function swapContextSymbol(key, schema, ctx) {

            if (key.indexOf(CONTEXT_SYMBOL) > -1) {
                schema[cut(key, CONTEXT_SYMBOL)] = ctx;
                delete schema[key];
            }

            return schema;
        }
    }, {
        key: 'swapFilter',
        value: function swapFilter(key, schema, ctx) {

            if (key === '$$filter') {

                schema.filter = (function (filters, ctx) {

                    return function (value) {
                        return self.filter(value, filters, ctx);
                    };
                })(schema.$$filter, defaults);

                delete schema.$$filter;
            }
            return schema;
        }
    }, {
        key: 'eagerCompile',
        value: function eagerCompile(key, schema, ctx, types) {

            if (key.indexOf(EAGER_COMPILE_SYMBOL) > -1) if (!Array.isArray(schema[key])) {
                schema[cut(key, EAGER_COMPILE_SYMBOL)] = this.compile(schema[key]);
                delete schema[key];
            }
            return schema;
        }
    }, {
        key: 'eagerCompileArray',
        value: function eagerCompileArray(key, schema, ctx, types) {

            if (key.indexOf(EAGER_COMPILE_SYMBOL) > -1) if (Array.isArray(schema[key])) {
                schema[cut(key, EAGER_COMPILE_SYMBOL)] = schema[key].map((function (scheme) {
                    return this.compile(scheme);
                }).bind(this));
                delete schema[key];
            }
            return schema;
        }
    }, {
        key: 'compile',
        value: function compile(schema) {

            if (schema.type in this.types) return this.types[schema.type](schema);

            if (schema.type in inputs) return this.types.input(schema);

            return this.types['default'](schema);
        }
    }]);

    return Compiler;
})();

exports['default'] = Compiler;
module.exports = exports['default'];