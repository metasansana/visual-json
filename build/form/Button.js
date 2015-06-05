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
 * Button provides a clickable button.
 */

var Button = (function (_React$Component) {
    function Button() {
        _classCallCheck(this, Button);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Button, _React$Component);

    _createClass(Button, [{
        key: 'buttonClicked',
        value: function buttonClicked(e) {

            this.props.onClick && this.props.onClick(this.props.name, e.target.value, e);
        }
    }, {
        key: 'getIcon',
        value: function getIcon() {

            if (this.props.icon) return _react2['default'].createElement('span', { className: this.props.icon });

            return null;
        }
    }, {
        key: 'getLabel',
        value: function getLabel() {

            if (this.props.textLabel) return this.props.textLabel;

            return null;
        }
    }, {
        key: 'render',
        value: function render() {

            var props = {};

            for (var key in this.props) if (this.props.hasOwnProperty(key)) props[key] = this.props[key];

            props.onClick = this.buttonClicked.bind(this);
            return _react2['default'].createElement('button', props, ' ', this.getIcon(), this.getLabel());
        }
    }]);

    return Button;
})(_react2['default'].Component);

Button.propTypes = {
    name: _react2['default'].PropTypes.string.isRequired,
    onClick: _react2['default'].PropTypes.func,
    textLabel: _react2['default'].PropTypes.string,
    icon: _react2['default'].PropTypes.string,
    className: _react2['default'].PropTypes.string

};

exports['default'] = Button;
module.exports = exports['default'];