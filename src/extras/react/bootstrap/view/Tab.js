import React from 'react';
import util from '../util';

/**
 * Tab renders a set of tabs.
 *
 * @note: This only renders the `li` item, not the whole nav or multiple tabs.
 *
 * Use a NavList with class 'nav nav-tabs' to render the whole thing.
 *
 * @param {Object} props
 * @param {String} props.name The name of this tab (Used to tell if it is active)
 * @param {String} props.textLabel The text label for this tab.
 * @param {Function} props.onClick A callback called with the tab name when this tab is clicked.
 * @param {Function} props.onActive A callback called when the tab becomes active.
 *
 */
class Tab extends React.Component {

    componentDidMount() {

        if (this.props.name === this.props.activeOn)
            if (this.props.onActive)
                this.props.onActive(this.props.name);

    }

    clicked(e) {
        e.preventDefault();
        this.props.onClick(this.props.name);
    }

    render() {

        var {name, activeOn, onClick, textLabel, children, href} = this.props;

        return util.skipKeys('li', {
                className:(name === activeOn)? 'active':null
            },
            [].concat(React.createElement('a', {
                    href: href, onClick: (onClick) ?
                        this.clicked.bind(this) : null
                }, (textLabel)?textLabel:name)
                || children));
    }

}

Tab.propTypes = {
    name: React.PropTypes.string,
    href: React.PropTypes.string,
    textLabel: React.PropTypes.string,
    activeOn: React.PropTypes.string,
    onClick: React.PropTypes.func,
    onActive: React.PropTypes.func
};

Tab.defaultProps = {
  href:'javascript:'
};

export default Tab;
