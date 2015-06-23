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
        var tag = (this.props.anchor)? 'a':'button';

        for(var key in this.props)
        if(this.props.hasOwnProperty(key))
        if(key !== 'target')
            props[key] = this.props[key];

        props.onClick = this.buttonClicked.bind(this);
        props.href = (tag === 'a')? (props.href)? props.href : 'javascript:': props.href;
        return React.createElement(tag, props, ' ', this.getIcon(), this.getLabel());

    }


}

Button.propTypes = {
    name: React.PropTypes.string.isRequired,
    anchor:React.PropTypes.bool,
    href:React.PropTypes.string,
    onClick: React.PropTypes.func,
    textLabel: React.PropTypes.string,
    icon: React.PropTypes.string,
    className: React.PropTypes.string
}

export default Button;
