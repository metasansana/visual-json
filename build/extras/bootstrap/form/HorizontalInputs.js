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

var _util = require('./util');

var _util2 = _interopRequireDefault(_util);

var Wrapper = (function (_React$Component) {
    function Wrapper() {
        _classCallCheck(this, Wrapper);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Wrapper, _React$Component);

    _createClass(Wrapper, [{
        key: 'render',
        value: function render() {

            var childs = this.props.children;

            if (!Array.isArray(childs)) ;
            childs = [childs];

            var args = ['div', { className: this.props.wrapClass }].concat(childs);

            return _react2['default'].createElement.apply(_react2['default'], args);
        }
    }]);

    return Wrapper;
})(_react2['default'].Component);

/**
 * HorizontalGroup
 */

var HorizontalGroup = (function (_React$Component2) {
    function HorizontalGroup() {
        _classCallCheck(this, HorizontalGroup);

        if (_React$Component2 != null) {
            _React$Component2.apply(this, arguments);
        }
    }

    _inherits(HorizontalGroup, _React$Component2);

    _createClass(HorizontalGroup, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var labelClassName = _props.className;
            var labelText = _props.labelText;

            var label = _react2['default'].createElement('label', {
                className: 'control-label ' + labelClassName
            }, labelText);

            return _util2['default'].skipKeys('div', { className: 'form-group' }, [label].concat(this.props.children));
        }
    }]);

    return HorizontalGroup;
})(_react2['default'].Component);

HorizontalInputs.propTypes = {
    'labelClassName': _react2['default'].PropTypes.string,
    'labelText': _react2['default'].PropTypes.string
};

exports['default'] = HorizontalInputs;
module.exports = exports['default'];