import React from 'react';

/**
 * DropDownHeader
 */
class DropDownHeader extends React.Component {

    render() {
        return React.createElement('li', {className:'dropdown-header'}, ...this.props.children);
    }

}

DropDownHeader.propTypes = {};

export default DropDownHeader
