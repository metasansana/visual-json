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

/**
 * Tab
 */

var Tab = (function (_React$Component) {
    function Tab() {
        _classCallCheck(this, Tab);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Tab, _React$Component);

    _createClass(Tab, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            if (this.props.name === this.props.activeOn) if (this.props.onActive) this.props.onActive(this.props.name);
        }
    }, {
        key: 'clicked',
        value: function clicked(e) {
            e.preventDefault();
            this.props.onClick(this.props.name);
        }
    }, {
        key: 'render',
        value: function render() {

            return _util2['default'].skipKeys('li', {
                className: this.props.name === this.props.activeOn ? 'active' : null
            }, [].concat(_react2['default'].createElement('a', {
                href: '#', onClick: this.props.onClick ? this.clicked.bind(this) : null
            }, this.props.textLabel) || this.props.children));
        }
    }]);

    return Tab;
})(_react2['default'].Component);

Tab.propTypes = {
    name: _react2['default'].PropTypes.string,
    textLabel: _react2['default'].PropTypes.string,
    activeOn: _react2['default'].PropTypes.string,
    onClick: _react2['default'].PropTypes.func,
    onActive: _react2['default'].PropTypes.func
};

exports['default'] = Tab;
module.exports = exports['default'];