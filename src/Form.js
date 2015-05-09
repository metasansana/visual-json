import React from 'react';



/**
 * Form turns json into a react powered form.
 */
class Form extends React.Component {

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

        return (
            <form name={this.props.name} className={this.props.className}>
                {this.children}
            </form>
        );

    }

}

Form.propTypes = {
    schema: React.PropTypes.object.isRequired,
    handler: React.PropTypes.object,
    defaultValue: React.PropTypes.object
};

export default Form;
