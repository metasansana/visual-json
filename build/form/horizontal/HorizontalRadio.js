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

var _Control2 = require('./Control');

var _Control3 = _interopRequireDefault(_Control2);

var Option = (function (_React$Component) {
    function Option() {
        _classCallCheck(this, Option);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Option, _React$Component);

    _createClass(Option, [{
        key: 'render',
        value: function render() {

            var self = this;
            var props = {
                name: self.props.name,
                value: self.props.value,
                type: 'radio',
                onChange: self.props.onChange,
                className: ''
            };

            if (self.props.value === self.props.checked) props.checked = true;

            return _react2['default'].createElement('div', { className: 'radio' }, null, _react2['default'].createElement('label', { className: '' }, _react2['default'].createElement('input', props), self.props.label));
        }
    }]);

    return Option;
})(_react2['default'].Component);

Option.propTypes = {
    name: _react2['default'].PropTypes.string.isRequired,
    onChange: _react2['default'].PropTypes.func.isRequired,
    value: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]).isRequired,
    selected: _react2['default'].PropTypes.object,
    model: _react2['default'].PropTypes.object,
    label: _react2['default'].PropTypes.string
};

var HorizontalRadio = (function (_Control) {
    function HorizontalRadio() {
        _classCallCheck(this, HorizontalRadio);

        if (_Control != null) {
            _Control.apply(this, arguments);
        }
    }

    _inherits(HorizontalRadio, _Control);

    _createClass(HorizontalRadio, [{
        key: 'renderComponent',
        value: function renderComponent(callbacks) {

            var self = this;
            var bsSize = this.props.bsSize || 'md';
            var labelWidth = this.props.labelWidth || 4;
            var controlWidth = this.props.controlWidth || 8;

            var args = self.props.options.map(function (option) {

                var props = {
                    value: option.value,
                    label: option.label,
                    checked: self._defaultValue()
                };

                return _react2['default'].createElement(Option, self._defaultProps(props));
            });

            args.unshift({ className: 'col-' + bsSize + '-' + controlWidth });
            args.unshift('div');

            return _react2['default'].createElement('div', { className: 'form-group ' + this.state.validationState }, _react2['default'].createElement('label', { className: 'col-' + bsSize + '-' + labelWidth }, this.props.labelValue), _react2['default'].createElement.apply(_react2['default'], args));
        }
    }]);

    return HorizontalRadio;
})(_Control3['default']);

HorizontalRadio.propTypes = {
    name: _react2['default'].PropTypes.string.isRequired,
    model: _react2['default'].PropTypes.object.isRequired,
    options: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
        label: _react2['default'].PropTypes.string.isRequired,
        value: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]).isRequired
    })).isRequired,
    bsSize: _react2['default'].PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    labelWidth: _react2['default'].PropTypes.number,
    controlWidth: _react2['default'].PropTypes.number
};
exports['default'] = HorizontalRadio;
module.exports = exports['default'];