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

function clone(o) {
    return JSON.parse(JSON.stringify(o));
}

/**
 * Form turns json into a react powered form.
 */

var Form = (function (_React$Component) {
    function Form() {
        _classCallCheck(this, Form);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Form, _React$Component);

    _createClass(Form, [{
        key: 'submit',
        value: function submit(e) {
            return e.preventDefault();
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var onSubmit = _props.onSubmit;

            return _react2['default'].createElement('form', { className: className, onSubmit: onSubmit || this.submit }, this.props.children);
        }
    }]);

    return Form;
})(_react2['default'].Component);

Form.propTypes = {
    onSubmit: _react2['default'].PropTypes.func,
    className: _react2['default'].PropTypes.string
};

exports['default'] = Form;
module.exports = exports['default'];