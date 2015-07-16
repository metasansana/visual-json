'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _VerticalInput2 = require('./VerticalInput');

var _VerticalInput3 = _interopRequireDefault(_VerticalInput2);

/**
 * VerticalTextArea
 */

var VerticalTextArea = (function (_VerticalInput) {
    function VerticalTextArea(props) {
        _classCallCheck(this, VerticalTextArea);

        _get(Object.getPrototypeOf(VerticalTextArea.prototype), 'constructor', this).call(this, props);
        this.NATIVE_TYPE = 'textarea';
    }

    _inherits(VerticalTextArea, _VerticalInput);

    return VerticalTextArea;
})(_VerticalInput3['default']);

VerticalTextArea.propTypes = {
    type: _react2['default'].PropTypes.string,
    name: _react2['default'].PropTypes.string.isRequired,
    className: _react2['default'].PropTypes.string,
    placeholder: _react2['default'].PropTypes.any,
    rows: _react2['default'].PropTypes.number,
    value: _react2['default'].PropTypes.any,
    set: _react2['default'].PropTypes.func,
    onChange: _react2['default'].PropTypes.func,
    onBlur: _react2['default'].PropTypes.func,
    onFocus: _react2['default'].PropTypes.func,
    labelValue: _react2['default'].PropTypes.string

};

exports['default'] = VerticalTextArea;
module.exports = exports['default'];