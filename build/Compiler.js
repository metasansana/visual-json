'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _dotAccess = require('dot-access');

var _dotAccess2 = _interopRequireDefault(_dotAccess);

var _strtpl = require('strtpl');

var _strtpl2 = _interopRequireDefault(_strtpl);

var TypedError = (function (_Error) {
    function TypedError(message) {
        _classCallCheck(this, TypedError);

        _get(Object.getPrototypeOf(TypedError.prototype), 'constructor', this).call(this);

        if (Error.hasOwnProperty('captureStackTrace')) Error.captureStackTrace(this, this.constructor);else Object.defineProperty(this, 'stack', {
            value: new Error().stack
        });

        Object.defineProperty(this, 'message', {
            value: message
        });
    }

    _inherits(TypedError, _Error);

    _createClass(TypedError, [{
        key: 'name',
        get: function () {
            return this.constructor.name;
        }
    }]);

    return TypedError;
})(Error);

var KeyNotFoundOnContextError = (function (_TypedError) {
    function KeyNotFoundOnContextError(key) {
        _classCallCheck(this, KeyNotFoundOnContextError);

        _get(Object.getPrototypeOf(KeyNotFoundOnContextError.prototype), 'constructor', this).call(this, 'The Parse context does not have a key ' + key + '!');
    }

    _inherits(KeyNotFoundOnContextError, _TypedError);

    return KeyNotFoundOnContextError;
})(TypedError);

var KeyNotFoundInCacheError = (function (_TypedError2) {
    function KeyNotFoundInCacheError(key) {
        _classCallCheck(this, KeyNotFoundInCacheError);

        _get(Object.getPrototypeOf(KeyNotFoundInCacheError.prototype), 'constructor', this).call(this, 'The cache does not have a key ' + key + '!');
    }

    _inherits(KeyNotFoundInCacheError, _TypedError2);

    return KeyNotFoundInCacheError;
})(TypedError);

var DuplicateKeyError = (function (_TypedError3) {
    function DuplicateKeyError(key, o) {
        _classCallCheck(this, DuplicateKeyError);

        _get(Object.getPrototypeOf(DuplicateKeyError.prototype), 'constructor', this).call(this, 'The key "' + key + '" appears twice in your schema! This will end the world if we do any swapping or compiling! Schema: ' + JSON.stringify(o));
    }

    _inherits(DuplicateKeyError, _TypedError3);

    return DuplicateKeyError;
})(TypedError);

var inputs = {
    text: 1, date: 1, datetime: 1, range: 1, button: 1, color: 1, 'datetime-local': 1,
    email: 1, file: 1, hidden: 1, image: 1, month: 1, number: 1, password: 1, search: 1, tel: 1,
    time: 1, url: 1, week: 1
};

var BUILTIN_SYMBOL = '$$';
var BUILTIN_STR_SYMBOL = '$#';

/**
 * Compiler compiles things that were parsed.
 *
 * Default Symbols:
 *
 *  @:    Swap the value of this property with a value from context
 *  @@:   Swap the value of this property with a value from context then parse that
 *        (Parsing should be handled by the parser).
 *  !@:   Swap the value with the result of a  function from context
 *  $$$:  Process this property as a type or array of types.
 *
 */

var Compiler = (function () {
    function Compiler(types, filters, cache) {
        _classCallCheck(this, Compiler);

        this.types = types;
        this.filters = filters;
        this.cache = cache;
        this.SYMBOLS = {
            SWAP: '@',
            SWAP_AND_PARSE: '@@',
            CALL_AND_SWAP: '!@',
            CALL_AND_SWAP_AND_PARSE_SYMBOL: '!@@',
            //BUILTIN_SYMBOL: '$$',
            //BUILTIN_STR_SYMBOL: '$#',
            EAGER_COMPILE: '$$$',
            PARSE_STEP: '$->',
            'TEMPLATE': '^'
        };
    }

    _createClass(Compiler, [{
        key: 'cut',
        value: function cut(key, target) {
            return key.replace(target, '');
        }
    }, {
        key: '_checkDups',
        value: function _checkDups(key, o) {
            if (o.hasOwnProperty(key)) throw new DuplicateKeyError(key, o);
        }
    }, {
        key: '_swap',
        value: function _swap(symbol, key, schema, ctx) {

            var desiredKey = schema[key];

            if (desiredKey === 'this') {
                schema[this.cut(key, symbol)] = ctx;
            } else if (typeof ctx[desiredKey] === 'function') {
                schema[this.cut(key, symbol)] = ctx[desiredKey].bind(ctx);
            } else {
                schema[this.cut(key, symbol)] = _dotAccess2['default'].get(ctx, desiredKey);
            }

            delete schema[key];
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
            return (0, _strtpl2['default'])(value, context);
        }
    }, {
        key: 'hasSymbol',

        /**
         * hasSymbol checks if a symbol exists in the key.
         *
         * It first checks that no other symbols exists to prevent mixesups.
         * @param key
         * @param sym
         * @returns {boolean}
         */
        value: function hasSymbol(key, sym) {

            for (var index in this.SYMBOLS) if (this.SYMBOLS.hasOwnProperty(index)) if (this.SYMBOLS[index] !== sym) if (key.indexOf(this.SYMBOLS[index]) > -1) return false;

            return key.indexOf(sym) > -1;
        }
    }, {
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

            if (this.hasSymbol(key, this.SYMBOLS.SWAP)) {
                this._checkDups(this.cut(key, this.SYMBOLS.SWAP), schema);
                return this._swap(this.SYMBOLS.SWAP, key, schema, ctx);
            }
            return schema;
        }
    }, {
        key: 'swapSymbolAndParse',
        value: function swapSymbolAndParse(key, schema, ctx, fn) {

            if (this.hasSymbol(key, this.SYMBOLS.SWAP_AND_PARSE)) {
                this._checkDups(this.cut(key, this.SYMBOLS.SWAP_AND_PARSE), schema);
                var ret = this._swap(this.SYMBOLS.SWAP_AND_PARSE, key, schema, ctx);
                ret[this.cut(key, this.SYMBOLS.SWAP_AND_PARSE)] = fn(ret[this.cut(key, this.SYMBOLS.SWAP_AND_PARSE)], ctx, this);
                return ret;
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

            if (this.hasSymbol(key, this.SYMBOLS.CALL_AND_SWAP)) {

                this._checkDups(this.cut(key, this.SYMBOLS.CALL_AND_SWAP), schema);

                var desiredKey = schema[key];
                var args = desiredKey.split(' ');
                desiredKey = args.shift();

                if (!ctx.hasOwnProperty(desiredKey)) throw new KeyNotFoundOnContextError(desiredKey);

                schema[this.cut(key, this.SYMBOLS.CALL_AND_SWAP)] = ctx[desiredKey].apply(ctx, args);

                delete schema[key];
            }

            return schema;
        }
    }, {
        key: 'swapTemplate',

        /**
         * swapTemplate applies a string template to the value.
         */
        value: function swapTemplate(key, schema, ctx) {

            if (this.hasSymbol(key, this.SYMBOLS.TEMPLATE)) {
                this._checkDups(this.cut(key, this.SYMBOLS.TEMPLATE), schema);

                schema[this.cut(key, this.SYMBOLS.TEMPLATE)] = this.template(schema[key], ctx);
                delete schema[key];
            }

            return schema;
        }
    }, {
        key: 'filter',

        /**
         * filter a value based on a '\' delimited string of filters.
         * @param {*} value
         * @param {String} list
         * @param {Object} context
         * @param {Function} cb
         * @returns {*}
         */
        value: function filter(value, list, context) {

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

                /* filter(value, args1...argn, context, next)*/

                nextFilterArray.unshift(thisValue);
                nextFilterArray.push(context);
                nextFilterArray.push(next);
                return self.filters[nextFilterMethodName].apply(self.filters, nextFilterArray);
            };

            return next(value);
        }
    }, {
        key: 'eagerCompile',
        value: function eagerCompile(key, schema, ctx, types) {

            if (key.indexOf(this.SYMBOLS.EAGER_COMPILE) > -1) if (!Array.isArray(schema[key])) {
                this._checkDups(this.cut(key, this.SYMBOLS.EAGER_COMPILE), schema);
                schema[this.cut(key, this.SYMBOLS.EAGER_COMPILE)] = this.compile(schema[key]);
                delete schema[key];
            }
            return schema;
        }
    }, {
        key: 'eagerCompileArray',
        value: function eagerCompileArray(key, schema, ctx, types) {

            if (key.indexOf(this.SYMBOLS.EAGER_COMPILE) > -1) if (Array.isArray(schema[key])) {

                this._checkDups(this.cut(key, this.SYMBOLS.EAGER_COMPILE), schema);

                schema[this.cut(key, this.SYMBOLS.EAGER_COMPILE)] = schema[key].map((function (scheme) {
                    return this.compile(scheme);
                }).bind(this));

                delete schema[key];
            }
            return schema;
        }
    }, {
        key: 'compile',
        value: function compile(schema) {

            if (!schema.type) return schema;

            if (schema.type in this.types) return this.types[schema.type](schema);

            if (schema.type in inputs) return this.types.input(schema);

            return this.types['default'](schema);
        }
    }]);

    return Compiler;
})();

exports['default'] = Compiler;
module.exports = exports['default'];