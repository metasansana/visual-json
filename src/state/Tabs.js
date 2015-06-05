import React from 'react';
/**
 * Tabs renders bootstrap tabs.
 *
 * Useful when combined with a switch.
 */
class Tabs extends React.Component {

  renderTabs() {

    return this.props.tabs.map(function (tab, i) {

      var props = {};
      var aProps = {};
      var keyForActive = tab.activeKey || tab.tabKey;
      var currentTab = this.props.currentTab || this.props.defaultTab;

      if (currentTab === keyForActive)
        props.className = "active";

      props.role = 'presentation';
      props.key = i;
      aProps.href = 'javascript:';

      aProps.onClick = function (tabKey) {
        var state = {};
        state[this.props.stateKey] = tabKey;
        this.props.parent.setState(state);
      }.bind(this, tab.tabKey);

      return React.createElement('li', props, React.createElement('a', aProps, tab.label));

    }.bind(this));
  }

  render() {
    return React.createElement('ul', {className: 'nav nav-tabs'}, this.renderTabs());
  }
}

Tabs.propTypes = {
  parent: React.PropTypes.object.isRequired,
  stateKey:React.PropTypes.string.isRequired,
  currentTab:React.PropTypes.string,
  defaultTab:React.PropTypes.string,
  tabs: React.PropTypes.arrayOf(React.PropTypes.shape(
    {
      label: React.PropTypes.string.isRequired,
      tabKey: React.PropTypes.string.isRequired,
      activeKey: React.PropTypes.string
    }
  )).isRequired

};

export default Tabs;
