'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * Switch collects a set of components and renders each
 * based on a key.
 */

var Switch = (function (_React$Component) {
    function Switch(props) {
        _classCallCheck(this, Switch);

        _get(Object.getPrototypeOf(Switch.prototype), 'constructor', this).call(this, props);
        this.state = {};
    }

    _inherits(Switch, _React$Component);

    _createClass(Switch, [{
        key: 'render',
        value: function render() {

            var views = this.props.views;
            var state = this.props.currentView || this.props.defaultView || Object.keys(this.props.views)[0];

            if (!views.hasOwnProperty(state)) state = this.props.defaultView;

            if (!views.hasOwnProperty(state)) throw new Error('Unknown view state ' + state + ' not found in ' + Object.keys(this.props.views) + '!');

            var ret = this.props.$parser.parse(views[state]);

            if (Array.isArray(ret)) ret = _react2['default'].createElement('span', null, ret);

            return ret;
        }
    }]);

    return Switch;
})(_react2['default'].Component);

Switch.propTypes = {
    $parser: _react2['default'].PropTypes.object.isRequired,
    currentView: _react2['default'].PropTypes.string,
    views: _react2['default'].PropTypes.object.isRequired,
    defaultView: _react2['default'].PropTypes.string
};

exports['default'] = Switch;
module.exports = exports['default'];