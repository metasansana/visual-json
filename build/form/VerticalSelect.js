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
        value: function renderComponent() {

            return _react2['default'].createElement('div', { className: 'form-group' + this.state.validationState }, _react2['default'].createElement('label', {}, this.props.labelValue), _Select3['default'].prototype.renderComponent.call(this));
        }
    }]);

    return VerticalSelect;
})(_Select3['default']);

VerticalSelect.propTypes = {
    name: _react2['default'].PropTypes.string.isRequired,
    options: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
        label: _react2['default'].PropTypes.string.isRequired,
        value: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.string, _react2['default'].PropTypes.number]).isRequired
    })).isRequired,
    model: _react2['default'].PropTypes.object.isRequired
};
exports['default'] = VerticalSelect;
module.exports = exports['default'];