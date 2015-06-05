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

var _Control = require('./Control');

var _Control2 = _interopRequireDefault(_Control);

var _Radio2 = require('./Radio');

var _Radio3 = _interopRequireDefault(_Radio2);

var VerticalRadio = (function (_Radio) {
    function VerticalRadio() {
        _classCallCheck(this, VerticalRadio);

        if (_Radio != null) {
            _Radio.apply(this, arguments);
        }
    }

    _inherits(VerticalRadio, _Radio);

    _createClass(VerticalRadio, [{
        key: 'renderComponent',
        value: function renderComponent() {

            return _react2['default'].createElement('div', { className: 'form-group' + this.state.validationState }, _react2['default'].createElement('label', {}, this.props.labelValue), _Radio3['default'].prototype.renderComponent.call(this));
        }
    }]);

    return VerticalRadio;
})(_Radio3['default']);

VerticalRadio.propTypes = {
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
exports['default'] = VerticalRadio;
module.exports = exports['default'];