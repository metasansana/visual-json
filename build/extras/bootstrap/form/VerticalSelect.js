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

var _Select2 = require('./Select');

var _Select3 = _interopRequireDefault(_Select2);

var VerticalSelect = (function (_Select) {
    function VerticalSelect() {
        _classCallCheck(this, VerticalSelect);

        if (_Select != null) {
            _Select.apply(this, arguments);
        }
    }

    _inherits(VerticalSelect, _Select);

    _createClass(VerticalSelect, [{
        key: 'renderComponent',
        value: function renderComponent(props) {

            return _react2['default'].createElement('div', { className: 'form-group' }, _react2['default'].createElement('label', {}, this.props.labelValue), _Select3['default'].prototype.renderComponent.call(this, props));
        }
    }]);

    return VerticalSelect;
})(_Select3['default']);

VerticalSelect.propTypes = {
    type: _react2['default'].PropTypes.string,
    name: _react2['default'].PropTypes.string.isRequired,
    className: _react2['default'].PropTypes.string,
    labelValue: _react2['default'].PropTypes.string,
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
    onFocus: _react2['default'].PropTypes.func
};

VerticalSelect.defaultProps = {
    options: [],
    valueField: 'value',
    labelField: 'label'
};
exports['default'] = VerticalSelect;
module.exports = exports['default'];