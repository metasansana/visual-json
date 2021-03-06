import React from 'react';

function clone(o) {
    return JSON.parse(JSON.stringify(o));
}

/**
 * Form turns json into a react powered form.
 */
class Form extends React.Component {

    submit(e) {
        console.log('a form is being sumbitted ');
        if (this.props.noSubmit)
            return e.preventDefault();
        if (this.props.onSubmit) {
            e.preventDefault();
            this.props.onSubmit();
        }
    }

    render() {

        var props = this.props.$parser.cloneProps(this.props);
        props.onSubmit = this.submit.bind(this);
        delete props.controls;
        return React.createElement('form', props, this.props.$parser.parse(this.props.controls,
            this.props.$context));

    }

}

Form.propTypes = {
    $parser: React.PropTypes.object,
    onSubmit: React.PropTypes.func,
    noSubmit: React.PropTypes.bool,
    defaultValue: React.PropTypes.object,
    controls: React.PropTypes.arrayOf(React.PropTypes.object)
};

export default Form;
