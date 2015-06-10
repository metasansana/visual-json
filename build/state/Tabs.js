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
 * Tabs renders bootstrap tabs.
 *
 * Useful when combined with a switch.
 */

var Tabs = (function (_React$Component) {
  function Tabs() {
    _classCallCheck(this, Tabs);

    if (_React$Component != null) {
      _React$Component.apply(this, arguments);
    }
  }

  _inherits(Tabs, _React$Component);

  _createClass(Tabs, [{
    key: 'renderTabs',
    value: function renderTabs() {

      return this.props.tabs.map((function (tab, i) {

        var props = {};
        var aProps = {};
        var keyForActive = tab.activeKey || tab.tabKey;
        var currentTab = this.props.currentTab || this.props.defaultTab;
        var parent = this.props.parent || this.props.$context;

        if (tab.hasOwnProperty('hidden')) if (tab.hidden === true) return null;

        if (currentTab === keyForActive) props.className = 'active';

        props.role = 'presentation';
        props.key = i;
        aProps.href = 'javascript:';

        aProps.onClick = (function (tabKey) {
          var state = {};
          state[this.props.stateKey] = tabKey;
          parent.setState(state);
        }).bind(this, tab.tabKey);

        return _react2['default'].createElement('li', props, _react2['default'].createElement('a', aProps, tab.label));
      }).bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('ul', { className: 'nav nav-tabs' }, this.renderTabs());
    }
  }]);

  return Tabs;
})(_react2['default'].Component);

Tabs.propTypes = {
  parent: _react2['default'].PropTypes.object,
  $context: _react2['default'].PropTypes.object.isRequired,
  stateKey: _react2['default'].PropTypes.string.isRequired,
  currentTab: _react2['default'].PropTypes.string,
  defaultTab: _react2['default'].PropTypes.string,
  tabs: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
    label: _react2['default'].PropTypes.string.isRequired,
    tabKey: _react2['default'].PropTypes.string.isRequired,
    activeKey: _react2['default'].PropTypes.string
  })).isRequired

};

exports['default'] = Tabs;
module.exports = exports['default'];