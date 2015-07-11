import React from 'react';

/**
 * PanelBody
 */
class PanelBody extends React.Component {

    render() {

        return React.createElement('div', {className:'panel-body'}, this.props.children);

    }

}

PanelBody.propTypes = {
    className: React.PropTypes.string
};

export default PanelBody;
