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

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

var _Control2 = require('./Control');

var _Control3 = _interopRequireDefault(_Control2);

var Select = (function (_Control) {
    function Select() {
        _classCallCheck(this, Select);

        if (_Control != null) {
            _Control.apply(this, arguments);
        }
    }

    _inherits(Select, _Control);

    _createClass(Select, [{
        key: 'renderComponent',
        value: function renderComponent(callbacks) {

            var props = this._defaultProps();
            var bsSize = this.props.bsSize || 'md';
            var labelWidth = this.props.labelWidth || 4;
            var controlWidth = this.props.controlWidth || 8;

            props.options = props.options || [];

            return _react2['default'].createElement('div', { className: 'form-group ' + this.state.validationState }, _react2['default'].createElement('label', { className: 'col-' + bsSize + '-' + labelWidth }, this.props.labelValue), _react2['default'].createElement('div', { className: 'col-' + bsSize + '-' + controlWidth }, _react2['default'].createElement.apply(_react2['default'], ['select', props].concat(props.options.map(function (option) {
                return _react2['default'].createElement('option', { value: option.value }, option.label);
            })))));
        }
    }]);

    return Select;
})(_Control3['default']);

Select.propTypes = {
    name: _react2['default'].PropTypes.string.isRequired,
    options: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
        label: _react2['default'].PropTypes.string.isRequired,
        value: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]).isRequired
    })).isRequired,
    model: _react2['default'].PropTypes.object.isRequired,
    bsSize: _react2['default'].PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    labelWidth: _react2['default'].PropTypes.number,
    controlWidth: _react2['default'].PropTypes.number
};
exports['default'] = Select;
module.exports = exports['default'];