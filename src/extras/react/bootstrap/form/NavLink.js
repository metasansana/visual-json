import React from 'react';
import Anchor from './Anchor';

/**
 * NavLink
 */
class NavLink extends React.Component {

    render() {

        var {name, active, title, className, href, onClick} = this.props;

        return React.createElement('li', {className: (active) ? 'active' : ''},
            React.createElement(Anchor,
                {name: name, title: title, className: className, href: href, onClick: onClick},
                ...this.props.children));
    }

}

NavLink.propTypes = {
    name: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool,
    title: React.PropTypes.string,
    className: React.PropTypes.string,
    href: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default NavLink
