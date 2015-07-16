'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _viewIconFont = require('../view/IconFont');

var _viewIconFont2 = _interopRequireDefault(_viewIconFont);

/**
 * ButtonDropDown
 */

var ButtonDropDown = (function (_React$Component) {
    function ButtonDropDown() {
        _classCallCheck(this, ButtonDropDown);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(ButtonDropDown, _React$Component);

    _createClass(ButtonDropDown, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var children = _props.children;
            var buttonContent = _props.buttonContent;

            children = Array.isArray(children) ? children : [children];

            return _react2['default'].createElement('div', { className: 'btn-group' }, _react2['default'].createElement('button', {
                className: 'btn ' + className + ' dropdown-toggle',
                'data-toggle': 'dropdown'
            }, buttonContent), _react2['default'].createElement.apply(_react2['default'], ['ul', { className: 'dropdown-menu' }].concat(_toConsumableArray(children))));
        }
    }]);

    return ButtonDropDown;
})(_react2['default'].Component);

ButtonDropDown.propTypes = {
    className: _react2['default'].PropTypes.string,
    title: _react2['default'].PropTypes.string,
    buttonContent: _react2['default'].PropTypes.node
};

ButtonDropDown.defaultProps = {
    className: 'btn-default'
};

exports['default'] = ButtonDropDown;
module.exports = exports['default'];