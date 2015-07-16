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

var _Radio2 = require('./Radio');

var _Radio3 = _interopRequireDefault(_Radio2);

/**
 * StackedRadio
 */

var StackedRadio = (function (_Radio) {
    function StackedRadio() {
        _classCallCheck(this, StackedRadio);

        if (_Radio != null) {
            _Radio.apply(this, arguments);
        }
    }

    _inherits(StackedRadio, _Radio);

    _createClass(StackedRadio, [{
        key: 'renderComponent',
        value: function renderComponent(props, children) {
            return _react2['default'].createElement('div', { className: 'radio' }, _Radio3['default'].prototype.renderComponent.call(this, props, children));
        }
    }]);

    return StackedRadio;
})(_Radio3['default']);

StackedRadio.propTypes = {
    type: _react2['default'].PropTypes.string,
    name: _react2['default'].PropTypes.string.isRequired,
    className: _react2['default'].PropTypes.string,
    checked: _react2['default'].PropTypes.bool,
    value: _react2['default'].PropTypes.any,
    set: _react2['default'].PropTypes.func,
    onChange: _react2['default'].PropTypes.func,
    onBlur: _react2['default'].PropTypes.func,
    onFocus: _react2['default'].PropTypes.func
};

exports['default'] = StackedRadio;
module.exports = exports['default'];