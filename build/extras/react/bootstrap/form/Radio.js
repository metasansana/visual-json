'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Control2 = require('./Control');

var _Control3 = _interopRequireDefault(_Control2);

/**
 * Radio
 */

var Radio = (function (_Control) {
    function Radio(props) {
        _classCallCheck(this, Radio);

        _get(Object.getPrototypeOf(Radio.prototype), 'constructor', this).call(this, props);
        this.NATIVE_TYPE = 'radio';
        this.INLINE_CLASS = 'radio-inline';
    }

    _inherits(Radio, _Control);

    _createClass(Radio, [{
        key: 'renderComponent',
        value: function renderComponent(props, children) {
            var inline = props.inline;

            delete props.className;

            return _react2['default'].createElement('label', {
                className: inline ? this.INLINE_CLASS : null
            }, _react2['default'].createElement('input', props), children);
        }
    }]);

    return Radio;
})(_Control3['default']);

Radio.propTypes = {
    type: _react2['default'].PropTypes.string,
    name: _react2['default'].PropTypes.string.isRequired,
    className: _react2['default'].PropTypes.string,
    checked: _react2['default'].PropTypes.bool,
    value: _react2['default'].PropTypes.any,
    inline: _react2['default'].PropTypes.bool,
    set: _react2['default'].PropTypes.func,
    onChange: _react2['default'].PropTypes.func,
    onBlur: _react2['default'].PropTypes.func,
    onFocus: _react2['default'].PropTypes.func
};

exports['default'] = Radio;
module.exports = exports['default'];