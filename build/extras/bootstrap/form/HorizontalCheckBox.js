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

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

var _CheckBox2 = require('./CheckBox');

var _CheckBox3 = _interopRequireDefault(_CheckBox2);

var _HorizontalControl = require('./HorizontalControl');

var _HorizontalControl2 = _interopRequireDefault(_HorizontalControl);

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
        value: function renderComponent(props) {
            props.inline = true;
            return _react2['default'].createElement(_HorizontalControl2['default'], _util2['default'].transferKeys(_HorizontalControl2['default'].propTypes, props, {}), _CheckBox3['default'].prototype.renderComponent.call(this, _util2['default'].transferKeys(_CheckBox3['default'].propTypes, props, {})));
        }
    }]);

    return HorizontalCheckBox;
})(_CheckBox3['default']);

HorizontalCheckBox.propTypes = {
    type: _react2['default'].PropTypes.string,
    name: _react2['default'].PropTypes.string.isRequired,
    className: _react2['default'].PropTypes.string,
    inline: _react2['default'].PropTypes.bool,
    value: _react2['default'].PropTypes.bool,
    placeholder: _react2['default'].PropTypes.any,
    set: _react2['default'].PropTypes.func,
    onChange: _react2['default'].PropTypes.func,
    onBlur: _react2['default'].PropTypes.func,
    onFocus: _react2['default'].PropTypes.func,
    labelClassName: _react2['default'].PropTypes.string,
    labelValue: _react2['default'].PropTypes.string,
    controlClassName: _react2['default'].PropTypes.string
};

exports['default'] = HorizontalCheckBox;
module.exports = exports['default'];