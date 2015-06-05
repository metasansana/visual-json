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

var _formButton = require('../form/Button');

var _formButton2 = _interopRequireDefault(_formButton);

/**
 * StateButton is used to manipulate state of a context object via the click of a button.'
 *
 * Whatever you supply as the `resultKey` prop, will be set to the value of the buttons name.
 * This is typically usefull when used in combination with a Switch component.
 */

var StateButton = (function (_Button) {
  function StateButton() {
    _classCallCheck(this, StateButton);

    if (_Button != null) {
      _Button.apply(this, arguments);
    }
  }

  _inherits(StateButton, _Button);

  _createClass(StateButton, [{
    key: 'buttonClicked',
    value: function buttonClicked(e) {
      var state = {};
      state[this.props.stateKey] = this.props.name;
      this.props.target.setState(state);
    }
  }]);

  return StateButton;
})(_formButton2['default']);

StateButton.propTypes = {
  name: _react2['default'].PropTypes.string.isRequired,
  target: _react2['default'].PropTypes.object.isRequired,
  stateKey: _react2['default'].PropTypes.string.isRequired,
  textLabel: _react2['default'].PropTypes.string,
  icon: _react2['default'].PropTypes.string,
  className: _react2['default'].PropTypes.string

};

exports['default'] = StateButton;
module.exports = exports['default'];