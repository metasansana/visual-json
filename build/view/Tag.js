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
 * Tag renders any html tag you desire.
 */

var Tag = (function (_React$Component) {
    function Tag() {
        _classCallCheck(this, Tag);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Tag, _React$Component);

    _createClass(Tag, [{
        key: 'render',
        value: function render() {
            return _react2['default'].createElement(this.props.tag, this.props, this.props.$parser.parse(this.props.content));
        }
    }]);

    return Tag;
})(_react2['default'].Component);

Tag.propTypes = {
    $parser: _react2['default'].PropTypes.object.isRequired,
    tag: _react2['default'].PropTypes.string.isRequired,
    content: _react2['default'].PropTypes.object
};

exports['default'] = Tag;
module.exports = exports['default'];