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

var _CheckBox2 = require('./CheckBox');

var _CheckBox3 = _interopRequireDefault(_CheckBox2);

/**
 * HorizontalCheckBox
 */

var HorizontalCheckBox = (function (_CheckBox) {
    function HorizontalCheckBox() {
        _classCallCheck(this, HorizontalCheckBox);

        if (_CheckBox != null) {
            _CheckBox.apply(this, arguments);
        }
    }

    _inherits(HorizontalCheckBox, _CheckBox);

    _createClass(HorizontalCheckBox, [{
        key: 'renderComponent',
        value: function renderComponent() {

            var bsSize = this.props.bsSize || 'md';
            var controlWidth = 'col-' + bsSize + '-' + (this.props.controlWidth || 8);
            var offset = null;

            if (this.props.offset) controlWidth = controlWidth + ' col-' + bsSize + '-offset-' + this.props.offset;

            delete this.props.offset;

            return _react2['default'].createElement('div', { className: 'form-group' + this.state.validationState }, _react2['default'].createElement('div', { className: controlWidth }, _CheckBox3['default'].prototype.renderComponent.call(this)));
        }
    }]);

    return HorizontalCheckBox;
})(_CheckBox3['default']);

HorizontalCheckBox.propTypes = {
    name: _react2['default'].PropTypes.string.isRequired,
    bsSize: _react2['default'].PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    controlWidth: _react2['default'].PropTypes.number
};

exports['default'] = HorizontalCheckBox;
module.exports = exports['default'];