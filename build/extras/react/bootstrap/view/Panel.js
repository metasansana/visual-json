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

var _PanelHeading = require('./PanelHeading');

var _PanelHeading2 = _interopRequireDefault(_PanelHeading);

var _PanelBody = require('./PanelBody');

var _PanelBody2 = _interopRequireDefault(_PanelBody);

var _PanelHeading3 = _interopRequireDefault(_PanelHeading);

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
        key: 'renderHeading',
        value: function renderHeading() {
            return this.props.heading ? _react2['default'].createElement(_PanelHeading2['default'], null, this.props.heading) : null;
        }
    }, {
        key: 'renderBody',
        value: function renderBody() {
            return this.props.body ? _react2['default'].createElement(_PanelBody2['default'], null, this.props.body) : null;
        }
    }, {
        key: 'renderFooter',
        value: function renderFooter() {
            return this.props.footer ? _react2['default'].createElement(_PanelHeading3['default'], null, this.props.footer) : null;
        }
    }, {
        key: 'render',
        value: function render() {
            return _util2['default'].skipKeys('div', { className: this.props.className }, [this.renderHeading(), this.renderBody(), this.renderFooter()].concat(this.props.children));
        }
    }]);

    return Panel;
})(_react2['default'].Component);

Panel.propTypes = {
    className: _react2['default'].PropTypes.string,
    heading: _react2['default'].PropTypes.node,
    body: _react2['default'].PropTypes.node,
    footer: _react2['default'].PropTypes.node
};

Panel.defaultProps = {
    className: 'panel panel-default'
};

exports['default'] = Panel;
module.exports = exports['default'];