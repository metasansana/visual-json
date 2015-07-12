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

var HorizontalControl = (function (_React$Component) {
    function HorizontalControl() {
        _classCallCheck(this, HorizontalControl);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(HorizontalControl, _React$Component);

    _createClass(HorizontalControl, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var labelClassName = _props.labelClassName;
            var labelValue = _props.labelValue;
            var controlClassName = _props.controlClassName;

            return _react2['default'].createElement('div', { className: 'form-group' }, _react2['default'].createElement('label', { className: labelClassName }, labelValue), _react2['default'].createElement('div', { className: controlClassName }, this.props.children));
        }
    }]);

    return HorizontalControl;
})(_react2['default'].Component);

HorizontalControl.propTypes = {
    labelClassName: _react2['default'].PropTypes.string,
    labelValue: _react2['default'].PropTypes.string,
    controlClassName: _react2['default'].PropTypes.string
};

HorizontalControl.defaultProps = {
    labelClassName: 'col-md-4',
    controlClassName: 'col-md-8'
};

HorizontalControl.takeProps = function (component) {
    var _component;

    return (_component = component, labelClassName = _component.labelClassName, labelValue = _component.labelValue, controlClassName = _component.controlClassName, _component);
};

exports['default'] = HorizontalControl;
module.exports = exports['default'];