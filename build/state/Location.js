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
 * Location modifies the windows location property.
 */

var Location = (function (_React$Component) {
  function Location() {
    _classCallCheck(this, Location);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Location, _React$Component);

  _createClass(Location, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      window.location = this.props.$template(this.props.url);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Location;
})(_react2['default'].Component);

Location.propTypes = {
  url: _react2['default'].PropTypes.string.isRequired,
  $template: _react2['default'].PropTypes.func.isRequired
};

exports['default'] = Location;
module.exports = exports['default'];