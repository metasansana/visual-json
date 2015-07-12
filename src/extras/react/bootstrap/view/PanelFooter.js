import React from 'react';

/**
 * PanelFooter
 */
class PanelFooter extends React.Component {

    render() {
        return React.createElement('div',{className:'panel-heading'}, this.props.children);
    }

}

PanelFooter.propTypes = {
    className: React.PropTypes.string
};

export default PanelFooter;
