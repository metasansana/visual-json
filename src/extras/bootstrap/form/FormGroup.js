import React from 'react';

/**
 * FormGroup wraps it's children in a formgroup.
 */
class FormGroup extends React.Component {

    render() {
        return React.createElement('div', {className: 'form-group'}, ...this.props.children);
    }
}

FormGroup.propTypes = {};

export default FormGroup
