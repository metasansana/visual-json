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
 * HorizontalGroup
 */

var HorizontalGroup = (function (_React$Component) {
    function HorizontalGroup() {
        _classCallCheck(this, HorizontalGroup);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(HorizontalGroup, _React$Component);

    _createClass(HorizontalGroup, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var className = _props.className;
            var labelValue = _props.labelValue;
            var children = _props.children;

            var label = _react2['default'].createElement('label', {
                className: className
            }, labelValue);

            return _util2['default'].skipKeys('div', { className: 'form-group' }, [label].concat(children));
        }
    }]);

    return HorizontalGroup;
})(_react2['default'].Component);

HorizontalGroup.propTypes = {
    className: _react2['default'].PropTypes.string,
    labelValue: _react2['default'].PropTypes.string
};

HorizontalGroup.defaultProps = {
    className: 'control-label col-md-4'
};

exports['default'] = HorizontalGroup;
module.exports = exports['default'];