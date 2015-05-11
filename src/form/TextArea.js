import React from 'react';

import Control from './Control';

/**
 * TextArea
 */
class TextArea extends Control {

    renderComponent(callbacks) {

        return (
            <textarea className="form-control" id={this.props.name}
                {...callbacks} name={this.props.name} {...this.props.attrs} defaultValue={this.props.defaultValue}></textarea>
        );

    }

}
TextArea.propTypes = {
    name: React.PropTypes.string.isRequired,
    defaultValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    attrs: React.PropTypes.object
}
export default TextArea;
