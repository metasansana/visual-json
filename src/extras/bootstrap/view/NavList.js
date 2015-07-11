import React from 'react';
import util from '../util';

/**
 * NavList
 * @link http://getbootstrap.com/components/#nav
 */
class NavList extends React.Component {
  render() {
    return util.skipKeys('ul', {className:this.props.className}, this.props.children);
  }
}

NavList.propTypes = {
  className: React.PropTypes.string
};

NavList.defaultProps = {
  className: 'nav nav-tabs'
};

export default NavList
