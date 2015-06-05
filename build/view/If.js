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

var _is = require('is');

var _is2 = _interopRequireDefault(_is);

/**
 * If conditionally shows its content
 */

var If = (function (_React$Component) {
    function If() {
        _classCallCheck(this, If);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(If, _React$Component);

    _createClass(If, [{
        key: 'render',
        value: function render() {

            var ret;

            if (!_is2['default'].empty(this.props.condition)) {
                ret = this.props.$parser.parse(this.props.then);
            } else {
                ret = this.props.$parser.parse(this.props['else']);
            }

            if (!ret) return null;

            if (typeof ret !== 'object') ret = _react2['default'].createElement('span', null, ret);

            return ret;
        }
    }]);

    return If;
})(_react2['default'].Component);

If.propTypes = {
    $parser: _react2['default'].PropTypes.object.isRequired,
    condition: _react2['default'].PropTypes.any,
    then: _react2['default'].PropTypes.any.isRequired,
    'else': _react2['default'].PropTypes.any
};

exports['default'] = If;
module.exports = exports['default'];