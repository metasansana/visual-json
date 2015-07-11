import React from 'react';
import util from '../util';

/**
 * Tab
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

        return util.skipKeys('li', {
                className:(this.props.name === this.props.activeOn)? 'active':null
            },
            [].concat(React.createElement('a', {
                    href: '#', onClick: (this.props.onClick) ?
                        this.clicked.bind(this) : null
                }, this.props.textLabel)
                || this.props.children));
    }

}

Tab.propTypes = {
    name: React.PropTypes.string,
    textLabel: React.PropTypes.string,
    activeOn: React.PropTypes.string,
    onClick: React.PropTypes.func,
    onActive: React.PropTypes.func
};

export default Tab;
