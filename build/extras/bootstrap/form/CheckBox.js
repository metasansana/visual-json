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

var _Radio2 = require('./Radio');

var _Radio3 = _interopRequireDefault(_Radio2);

/**
 * CheckBox
 */

var CheckBox = (function (_Radio) {
    function CheckBox(props) {
        _classCallCheck(this, CheckBox);

        _get(Object.getPrototypeOf(CheckBox.prototype), 'constructor', this).call(this, props);
        this.NATIVE_TYPE = 'checkbox';
        this.INLINE_CLASS = 'checkbox-inline';
    }

    _inherits(CheckBox, _Radio);

    _createClass(CheckBox, [{
        key: 'changed',
        value: function changed() {
            this.props.set(this.props.name, !this.props.checked);
        }
    }]);

    return CheckBox;
})(_Radio3['default']);

CheckBox.propTypes = {
    type: _react2['default'].PropTypes.string,
    name: _react2['default'].PropTypes.string.isRequired,
    className: _react2['default'].PropTypes.string,
    checked: _react2['default'].PropTypes.bool,
    inline: _react2['default'].PropTypes.bool,
    set: _react2['default'].PropTypes.func,
    onChange: _react2['default'].PropTypes.func,
    onBlur: _react2['default'].PropTypes.func,
    onFocus: _react2['default'].PropTypes.func
};

exports['default'] = CheckBox;
module.exports = exports['default'];