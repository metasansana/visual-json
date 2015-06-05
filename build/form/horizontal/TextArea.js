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

/**
 * HorizontalTextArea
 */

var HorizontalTextArea = (function (_Control) {
    function HorizontalTextArea() {
        _classCallCheck(this, HorizontalTextArea);

        if (_Control != null) {
            _Control.apply(this, arguments);
        }
    }

    _inherits(HorizontalTextArea, _Control);

    _createClass(HorizontalTextArea, [{
        key: 'renderComponent',
        value: function renderComponent(callbacks) {

            var bsSize = this.props.bsSize || 'md';
            var labelWidth = this.props.labelWidth || 4;
            var controlWidth = this.props.controlWidth || 8;

            return _react2['default'].createElement('div', { className: 'form-group ' + this.state.validationState }, _react2['default'].createElement('label', { className: 'col-' + bsSize + '-' + labelWidth }, this.props.labelValue), _react2['default'].createElement('div', { className: 'col-' + bsSize + '-' + controlWidth }, _react2['default'].createElement('textarea', self._defaultProps())));
        }
    }]);

    return HorizontalTextArea;
})(_Control3['default']);

HorizontalTextArea.propTypes = {
    name: _react2['default'].PropTypes.string.isRequired,
    defaultValue: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]),
    model: _react2['default'].PropTypes.object.isRequired,
    bsSize: _react2['default'].PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    labelWidth: _react2['default'].PropTypes.number,
    controlWidth: _react2['default'].PropTypes.number
};

exports['default'] = HorizontalTextArea;
module.exports = exports['default'];