import React from 'react';

/**
 * Button provides a clickable button.
 */
class Button extends React.Component{

    buttonClicked(e) {

        this.props.onClick &&
        this.props.onClick(this.props.name, e.target.value, e);

    }

    getIcon() {

        if(this.props.icon)
            return React.createElement('span', {className:this.props.icon});

        return null;

    }

    getLabel() {

        if(this.props.textLabel)
        return this.props.textLabel;

        return null;
    }

    render() {

        var props = {};

        for(var key in this.props)
        if(this.props.hasOwnProperty(key))
            props[key] = this.props[key];

        props.onClick = this.buttonClicked.bind(this);
        return React.createElement('button', props, ' ', this.getIcon(), this.getLabel());

    }


}

Button.propTypes = {
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    textLabel: React.PropTypes.string,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func
}

export default Button;
