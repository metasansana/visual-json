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

var _HorizontalControl = require('./HorizontalControl');

var _HorizontalControl2 = _interopRequireDefault(_HorizontalControl);

var _Select2 = require('./Select');

var _Select3 = _interopRequireDefault(_Select2);

var HorizontalSelect = (function (_Select) {
    function HorizontalSelect() {
        _classCallCheck(this, HorizontalSelect);

        if (_Select != null) {
            _Select.apply(this, arguments);
        }
    }

    _inherits(HorizontalSelect, _Select);

    _createClass(HorizontalSelect, [{
        key: 'renderComponent',
        value: function renderComponent(props) {
            return _react2['default'].createElement(_HorizontalControl2['default'], _HorizontalControl2['default'].takeProps(props), _Select3['default'].prototype.renderComponent.call(this, props));
        }
    }]);

    return HorizontalSelect;
})(_Select3['default']);

HorizontalSelect.propTypes = {
    type: _react2['default'].PropTypes.string,
    name: _react2['default'].PropTypes.string.isRequired,
    className: _react2['default'].PropTypes.string,
    multiple: _react2['default'].PropTypes.bool,
    blank: _react2['default'].PropTypes.string,
    valueField: _react2['default'].PropTypes.string,
    labelField: _react2['default'].PropTypes.string,
    options: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string, _react2['default'].PropTypes.array]),
    value: _react2['default'].PropTypes.any,
    placeholder: _react2['default'].PropTypes.any,
    set: _react2['default'].PropTypes.func,
    onChange: _react2['default'].PropTypes.func,
    onBlur: _react2['default'].PropTypes.func,
    onFocus: _react2['default'].PropTypes.func,
    labelClassName: _react2['default'].PropTypes.string,
    labelValue: _react2['default'].PropTypes.string,
    controlClassName: _react2['default'].PropTypes.string
};

HorizontalSelect.defaultProps = {
    options: [],
    valueField: 'value',
    labelField: 'label'
};
exports['default'] = HorizontalSelect;
module.exports = exports['default'];