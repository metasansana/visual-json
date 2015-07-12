'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _extrasES2015Error = require('../extras/ES2015Error');

var _extrasES2015Error2 = _interopRequireDefault(_extrasES2015Error);

/**
 * UnknownTypeError
 */

var UnknownTypeError = (function (_ES2015Error) {
    function UnknownTypeError(name) {
        _classCallCheck(this, UnknownTypeError);

        _get(Object.getPrototypeOf(UnknownTypeError.prototype), 'constructor', this).call(this);
        this.message = 'Unable to find any type named `' + name + '`!';
    }

    _inherits(UnknownTypeError, _ES2015Error);

    return UnknownTypeError;
})(_extrasES2015Error2['default']);

exports['default'] = UnknownTypeError;
module.exports = exports['default'];