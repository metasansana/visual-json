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
 * StackCheckBox renders a checkboxes that stack when put next to each other
 */

var StackedCheckBox = (function (_CheckBox) {
    function StackedCheckBox() {
        _classCallCheck(this, StackedCheckBox);

        if (_CheckBox != null) {
            _CheckBox.apply(this, arguments);
        }
    }

    _inherits(StackedCheckBox, _CheckBox);

    _createClass(StackedCheckBox, [{
        key: 'renderComponent',
        value: function renderComponent(props, children) {
            return _react2['default'].createElement('div', { className: 'checkbox' }, _CheckBox3['default'].prototype.renderComponent.call(this, props, children));
        }
    }]);

    return StackedCheckBox;
})(_CheckBox3['default']);

_CheckBox3['default'].propTypes = {
    type: _react2['default'].PropTypes.string,
    name: _react2['default'].PropTypes.string.isRequired,
    className: _react2['default'].PropTypes.string,
    checked: _react2['default'].PropTypes.bool,
    set: _react2['default'].PropTypes.func,
    onChange: _react2['default'].PropTypes.func,
    onBlur: _react2['default'].PropTypes.func,
    onFocus: _react2['default'].PropTypes.func
};

exports['default'] = StackedCheckBox;
module.exports = exports['default'];