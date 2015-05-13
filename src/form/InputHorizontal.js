import React from 'react';

import Callbacks from './Callbacks';
import Control from './Control';


/**
 * Input
 */
class Input extends Control {

    renderComponent(callbacks) {

        var defult = this.props.model.get(this.props.name)||this.props.defaultValue;


        return (
            <input className="form-control" id={this.props.name}
                   type={this.props.type}
                   name={this.props.name} defaultValue={defult}
                {...callbacks} {...this.props.attrs}/>
        );

    }
}

Input.propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    defaultValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    model: React.PropTypes.object.isRequired,
    attrs: React.PropTypes.object
}

export default Input;
