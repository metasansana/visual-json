import React from 'react';

import Control from './Control';

/**
 * Input
 */
class Input extends Control {

    renderComponent(callbacks) {

        return (
                    <input className="form-control" id={this.props.name}
                        type={this.props.type}
                        name={this.props.name} defaultValue={this.props.defaultValue}
                        {...callbacks} {...this.props.attrs}/>
        );
    }
}

Input.propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    defaultValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    attrs:React.PropTypes.object
}

export default Input;
