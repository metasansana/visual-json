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
 * Section
 */

var Section = (function (_React$Component) {
    function Section() {
        _classCallCheck(this, Section);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Section, _React$Component);

    _createClass(Section, [{
        key: 'render',
        value: function render() {

            return _react2['default'].createElement('section', this.props.$parser.cloneProps(this.props), this.$parser.parseObjectLike(this.props.content));
        }
    }]);

    return Section;
})(_react2['default'].Component);

Section.propTypes = {
    $parser: _react2['default'].PropTypes.object.isRequired,
    content: _react2['default'].PropTypes.oneOf([_react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.object), _react2['default'].PropTypes.object])
};

exports['default'] = Section;
module.exports = exports['default'];