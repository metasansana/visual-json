import React from 'react';

function clone(o) {
    return JSON.parse(JSON.stringify(o));
}


/**
 * Form turns json into a react powered form.
 */
class Form extends React.Component {

    submit(e) {

        if (this.props.onSubmit) {
            e.preventDefault();
            this.props.onSubmit();
        }

    }

    render() {

        return (
            <form name={this.props.name} className={this.props.className} {...this.props.attrs}
                  onSubmit={this.submit.bind(this)}>
                {this.props.children}
            </form>
        );

    }

}

Form.propTypes = {
    onSubmit:React.PropTypes.func,
    defaultValue: React.PropTypes.object,
};

export default Form;
