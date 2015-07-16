import React from 'react';

/**
 * Anchor
 */
class Anchor extends React.Component {

    clicked(e) {
        e.preventDefault();
        this.props.onClick(this.props.name, e);
    }

    render() {

        var props = {};

        for(var key in this.props)
        if(this.props.hasOwnProperty(key))
        props[key] = this.props[key];

        if(this.props.onClick)
        props.onClick = this.clicked.bind(this);

        props.href = (props.href)? props.href : 'javascript:';

        return React.createElement('a', props, ...this.props.children);

    }


}

Anchor.propTypes = {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string,
    className: React.PropTypes.string,
    href:React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default Anchor
