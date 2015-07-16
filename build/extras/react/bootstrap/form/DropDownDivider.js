'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * DropDownDivider
 */

var DropDownDivider = (function (_React$Component) {
    function DropDownDivider() {
        _classCallCheck(this, DropDownDivider);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(DropDownDivider, _React$Component);

    _createClass(DropDownDivider, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement('li', { role: 'separator', className: 'divider' });
        }
    }]);

    return DropDownDivider;
})(_react2['default'].Component);

DropDownDivider.propTypes = {};

exports['default'] = DropDownDivider;
module.exports = exports['default'];