'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * FormGroup wraps it's children in a formgroup.
 */

var FormGroup = (function (_React$Component) {
    function FormGroup() {
        _classCallCheck(this, FormGroup);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(FormGroup, _React$Component);

    _createClass(FormGroup, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement.apply(_react2['default'], ['div', { className: 'form-group' }].concat(_toConsumableArray(this.props.children)));
        }
    }]);

    return FormGroup;
})(_react2['default'].Component);

FormGroup.propTypes = {};

exports['default'] = FormGroup;
module.exports = exports['default'];