import React from 'react';

/**
 * Control
 *
 * Notes: The defaultValue field of a control must not use dot notation. Conversly it
 * is better to use dot notation for name attributes.
 */
class Control extends React.Component {

    constructor(props) {

        super(props);

        this.callbacks = {
            onClick: this.click.bind(this),
            onChange: this.change.bind(this),
            onBlur: this.blur.bind(this),
            onFocus: this.focus.bind(this)
        }
    }

    click(e) {
        this.props.handler.clicked(e.target.name, this, e.target);
    }

    change(e) {
        this.props.handler.valueChanged(e.target.name, e.target.value, this, e.target);
    }

    blur(e) {
        e.preventDefault();
        this.props.handler.focusLost(e.target.name, e.target.value, this, e.target);
    }

    focus(e) {
        this.props.handler.focusReceived(e.target.name, e.target.value, this, e.target);
    }

    renderComponent() {
        return (<b>Not implemented</b>);
    }


    render() {
        return this.renderComponent(this.callbacks);
    }

}
Control.propTypes = {
    handler: React.PropTypes.object.isRequired
};
export default Control;
