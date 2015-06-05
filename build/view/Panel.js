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

/**
 * Panel
 */

var Panel = (function (_React$Component) {
    function Panel() {
        _classCallCheck(this, Panel);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Panel, _React$Component);

    _createClass(Panel, [{
        key: 'render',
        value: function render() {

            var style = this.props.className || 'panel-default';
            var parser = this.props.$parser;

            return _react2['default'].createElement(
                'div',
                { className: 'panel ' + style },
                this.props.heading ? _react2['default'].createElement(
                    'div',
                    { className: 'panel-heading' },
                    parser.parse(this.props.heading)
                ) : '',
                this.props.body ? _react2['default'].createElement(
                    'div',
                    { className: 'panel-body' },
                    parser.parse(this.props.body)
                ) : '',
                this.props.table ? parser.parse(this.props.table) : null,
                this.props.footer ? _react2['default'].createElement(
                    'div',
                    { className: 'panel-footer' },
                    parser.parse(this.props.footer)
                ) : ''
            );
        }
    }]);

    return Panel;
})(_react2['default'].Component);

Panel.propTypes = {
    $parser: _react2['default'].PropTypes.object.isRequired,
    className: _react2['default'].PropTypes.string,
    heading: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.node, _react2['default'].PropTypes.object, _react2['default'].PropTypes.array]),
    body: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.node, _react2['default'].PropTypes.object, _react2['default'].PropTypes.array]),
    table: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.object, _react2['default'].PropTypes.array]),
    footer: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.node, _react2['default'].PropTypes.object, _react2['default'].PropTypes.array])
};

exports['default'] = Panel;
module.exports = exports['default'];