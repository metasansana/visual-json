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
 * Control
 */

var Control = (function (_React$Component) {
    function Control() {
        _classCallCheck(this, Control);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Control, _React$Component);

    _createClass(Control, [{
        key: 'getControlProps',
        value: function getControlProps() {

            var props = {};

            for (var key in this.props) if (this.props.hasOwnProperty(key)) if (key !== 'children') props[key] = this.props[key];

            props.type = props.nativeType || this.NATIVE_TYPE === 'input' ? 'text' : this.NATIVE_TYPE || 'text';

            props.onChange = props.set ? this.changed.bind(this) : props.onChange;
            props.className = 'form-control';
            return props;
        }
    }, {
        key: 'changed',
        value: function changed(e) {
            this.props.set(this.props.name, e.target.value, this);
        }
    }, {
        key: 'blured',
        value: function blured(e) {}
    }, {
        key: 'renderComponent',
        value: function renderComponent() {
            return null;
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderComponent(this.getControlProps(), this.props.children);
        }
    }]);

    return Control;
})(_react2['default'].Component);

exports['default'] = Control;
module.exports = exports['default'];