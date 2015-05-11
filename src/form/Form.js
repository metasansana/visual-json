import React from 'react';

/**
 * Form turns json into a react powered form.
 */
class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.model = this.props.defaultValue || {};
    }

    clicked(name, control, e) {

        console.log('clicked ', name);

    }

    valueChanged(name, value, control, e) {

        console.log('name->value', name, value);

    }

    focusReceived(name, value, control, e) {

        console.log('has focus ', name);

    }

    focusLost(name, value, control, e) {

        console.log('lost focus ', name)

    }

    render() {

        var childs = this.props.controls;
        var handler = this.props.handler || this;

        if (Array.isArray(this.props.controls)) {
            childs = this.props.controls.map(function (ele, i) {
                    return React.cloneElement(ele, {key: i, handler: handler});
            })
        }

        return (
            <form name={this.props.name} className={this.props.className}>
                {childs}
            </form>
        );

    }

}

Form.propTypes = {
    handler: React.PropTypes.object,
    defaultValue: React.PropTypes.object
};

export default Form;
