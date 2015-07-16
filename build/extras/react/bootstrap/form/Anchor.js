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

/**
 * Anchor
 */

var Anchor = (function (_React$Component) {
    function Anchor() {
        _classCallCheck(this, Anchor);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Anchor, _React$Component);

    _createClass(Anchor, [{
        key: 'clicked',
        value: function clicked(e) {
            e.preventDefault();
            this.props.onClick(this.props.name, e);
        }
    }, {
        key: 'render',
        value: function render() {

            var props = {};

            for (var key in this.props) if (this.props.hasOwnProperty(key)) props[key] = this.props[key];

            if (this.props.onClick) props.onClick = this.clicked.bind(this);

            props.href = props.href ? props.href : 'javascript:';

            return _react2['default'].createElement.apply(_react2['default'], ['a', props].concat(_toConsumableArray(this.props.children)));
        }
    }]);

    return Anchor;
})(_react2['default'].Component);

Anchor.propTypes = {
    name: _react2['default'].PropTypes.string.isRequired,
    title: _react2['default'].PropTypes.string,
    className: _react2['default'].PropTypes.string,
    href: _react2['default'].PropTypes.string,
    onClick: _react2['default'].PropTypes.func
};

exports['default'] = Anchor;
module.exports = exports['default'];