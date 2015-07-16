import React from 'react';
import Anchor from './Anchor';

/**
 * Button provides a clickable button.
 */
class Button extends React.Component {

    render() {

        var props = {};

        for(var key in this.props)
            if(this.props.hasOwnProperty(key))
                props[key] = this.props[key];

        if(this.props.onClick)
            props.onClick = this.clicked.bind(this);

        return React.createElement('button', props, ...this.props.children);

    }


}

Button.propTypes = {
    name: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func,
    className: React.PropTypes.string
};

export default Button;
