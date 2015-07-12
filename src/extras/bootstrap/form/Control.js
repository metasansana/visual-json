import React from 'react';

/**
 * Control
 */
class Control extends React.Component {

    getControlProps() {

        var props = {};

        for (var key in this.props)
            if (this.props.hasOwnProperty(key))
            if(key !== 'children')
                props[key] = this.props[key];

        props.type = props.nativeType ||
        (this.NATIVE_TYPE === 'input')? 'text': this.NATIVE_TYPE || 'text';

        props.onChange = (props.set) ? this.changed.bind(this) : props.onChange;
        props.className = 'form-control';
        return props;
    }

    changed(e) {
        this.props.set(this.props.name, e.target.value, this);
    }

    blured(e) {

    }

    renderComponent() {
        return null;
    }

    render() {
        return this.renderComponent(this.getControlProps(), this.props.children);
    }

}

export default Control
