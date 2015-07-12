import React from 'react';

/**
 * ButtonGroup
 */
class ButtonGroup extends React.Component {

    render() {
        return React.createElement.apply(null,
            ['div', {className:'btn-group '+this.props.className}].concat(this.props.children));
    }

}

ButtonGroup.propTypes = {
    className: React.PropTypes.string
};
export default ButtonGroup;
