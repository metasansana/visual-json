'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Wrapper = (function (_React$Component) {
    function Wrapper() {
        _classCallCheck(this, Wrapper);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Wrapper, _React$Component);

    _createClass(Wrapper, [{
        key: 'render',
        value: function render() {

            var childs = this.props.children;

            if (!Array.isArray(childs)) ;
            childs = [childs];

            var args = ['div', { className: this.props.wrapClass }].concat(childs);

            return _react2['default'].createElement.apply(_react2['default'], args);
        }
    }]);

    return Wrapper;
})(_react2['default'].Component);

/**
 * FormGroup
 */

var FormGroup = (function (_React$Component2) {
    function FormGroup() {
        _classCallCheck(this, FormGroup);

        if (_React$Component2 != null) {
            _React$Component2.apply(this, arguments);
        }
    }

    _inherits(FormGroup, _React$Component2);

    _createClass(FormGroup, [{
        key: 'render',
        value: function render() {

            var label;
            var controlSpec;
            var component;
            var parser = this.props.$parser;
            var $context = this.props.$context;

            if (this.props.label) label = _react2['default'].createElement(
                'label',
                _extends({ className: 'control-label ' + this.props.label.className }, this.props.label.attrs),
                this.props.label.value
            );

            if (this.props.controls.length === 1) {

                controlSpec = this.props.controls[0];

                if (controlSpec.wrapClass) {
                    component = _react2['default'].createElement(
                        Wrapper,
                        { wrapClass: controlSpec.wrapClass },
                        parser.parse(controlSpec.control, $context)
                    );
                } else {
                    component = controlSpec.control;
                }
            } else {

                component = this.props.controls.map(function (spec, i) {

                    if (spec.wrapClass) return _react2['default'].createElement(
                        Wrapper,
                        { key: i, wrapClass: spec.wrapClass },
                        parser.parse(spec.control, $context)
                    );

                    return spec.control;
                });
            }

            if (!Array.isArray(component)) component = [component];

            var args = ['div', { className: 'form-group' }, label].concat(component);
            return _react2['default'].createElement.apply(_react2['default'], args);
        }
    }]);

    return FormGroup;
})(_react2['default'].Component);

FormGroup.propTypes = {
    $parser: _react2['default'].PropTypes.object.isRequired,
    $context: _react2['default'].PropTypes.object.isRequired,
    label: _react2['default'].PropTypes.shape({
        className: _react2['default'].PropTypes.string,
        value: _react2['default'].PropTypes.node.isRequired,
        attrs: _react2['default'].PropTypes.object
    }),
    controls: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
        wrapClass: _react2['default'].PropTypes.string,
        control: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.object, _react2['default'].PropTypes.array]).isRequired
    })).isRequired

};

exports['default'] = FormGroup;
module.exports = exports['default'];