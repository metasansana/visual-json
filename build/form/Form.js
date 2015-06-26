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
            console.log('a form is being sumbitted ');
            if (this.props.noSubmit) return e.preventDefault();
            if (this.props.onSubmit) {
                e.preventDefault();
                this.props.onSubmit();
            }
        }
    }, {
        key: 'render',
        value: function render() {

            var props = this.props.$parser.cloneProps(this.props);
            props.onSubmit = this.submit.bind(this);
            delete props.controls;
            return _react2['default'].createElement('form', props, this.props.$parser.parse(this.props.controls, this.props.$context));
        }
    }]);

    return Form;
})(_react2['default'].Component);

Form.propTypes = {
    $parser: _react2['default'].PropTypes.object,
    onSubmit: _react2['default'].PropTypes.func,
    noSubmit: _react2['default'].PropTypes.bool,
    defaultValue: _react2['default'].PropTypes.object,
    controls: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.object)
};

exports['default'] = Form;
module.exports = exports['default'];