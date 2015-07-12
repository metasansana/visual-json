import React from 'react';

function clone(o) {
    return JSON.parse(JSON.stringify(o));
}

/**
 * Form turns json into a react powered form.
 */
class Form extends React.Component {

    submit(e) {
        return e.preventDefault();
    }

    render() {

        var {className, onSubmit} = this.props;
        return React.createElement('form', {className: className, onSubmit: onSubmit || this.submit},
            this.props.children);
    }

}

Form.propTypes = {
    onSubmit: React.PropTypes.func,
    className: React.PropTypes.string
};

export default Form;
