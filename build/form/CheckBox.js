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
 * CheckBox
 */

var CheckBox = (function (_Control) {
    function CheckBox() {
        _classCallCheck(this, CheckBox);

        if (_Control != null) {
            _Control.apply(this, arguments);
        }
    }

    _inherits(CheckBox, _Control);

    _createClass(CheckBox, [{
        key: 'renderComponent',
        value: function renderComponent() {

            return _react2['default'].createElement('div', { className: 'checkbox' }, _react2['default'].createElement('label', { className: this.props.inline ? 'checkbox-inline' : null }, _react2['default'].createElement('input', this._defaultProps({ className: '', type: 'checkbox' })), this.props.labelValue));
        }
    }]);

    return CheckBox;
})(_Control3['default']);

CheckBox.propTypes = {
    inline: _react2['default'].PropTypes.bool,
    labelValue: _react2['default'].PropTypes.string
};

exports['default'] = CheckBox;
module.exports = exports['default'];