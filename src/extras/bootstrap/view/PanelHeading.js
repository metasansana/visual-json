import React from 'react';

/**
 * PanelHeading
 */
class PanelHeading extends React.Component {

    render() {

        return React.createElement('div',{className:'panel-heading'}, this.props.children);

    }

}

PanelHeading.propTypes = {
    className: React.PropTypes.string
};
export default PanelHeading
