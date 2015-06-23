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

            var content = Array.isArray(this.props.content) ? this.props.content : [this.props.content];
            var secProps = this.props.$parser.cloneProps(this.props, Section.propTypes);
            secProps.className = 'container-fluid';

            content = content.map((function (schema, key) {
                return _react2['default'].createElement('div', { className: 'row-fluid', key: key }, this.props.$parser.parse(schema, this.props.$context));
            }).bind(this));

            return _react2['default'].createElement('section', secProps, content);
        }
    }]);

    return Section;
})(_react2['default'].Component);

Section.propTypes = {
    $parser: _react2['default'].PropTypes.object.isRequired,
    $context: _react2['default'].PropTypes.object.isRequired,
    content: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.array, _react2['default'].PropTypes.object])
};

exports['default'] = Section;
module.exports = exports['default'];