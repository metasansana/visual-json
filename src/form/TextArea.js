import React from 'react';

import Control from './Control';

/**
 * TextArea
 */
class TextArea extends Control {

    renderComponent(callbacks) {

        var self = this;
        return React.createElement('textarea', self._defaultProps());

    }

}
TextArea.propTypes = {
    name: React.PropTypes.string.isRequired,
    defaultValue: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
    attrs: React.PropTypes.object,
    model:React.PropTypes.object.isRequired
}
export default TextArea;
