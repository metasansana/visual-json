import React from 'react';
import util from '../util';
import PanelHeading from './PanelHeading';
import PanelBody from './PanelBody';
import PanelFooter from './PanelHeading';

/**
 * Panel
 */
class Panel extends React.Component {

    renderHeading() {
        return (this.props.heading) ? React.createElement(PanelHeading, null, this.props.heading) : null;
    }

    renderBody() {
        return (this.props.body) ? React.createElement(PanelBody, null, this.props.body) : null;
    }

    renderFooter() {
        return (this.props.footer) ? React.createElement(PanelFooter, null, this.props.footer) : null;
    }

    render() {
        return util.skipKeys('div',
            {className: this.props.className},
            [this.renderHeading(), this.renderBody(), this.renderFooter()].concat(this.props.children));
    }

}

Panel.propTypes = {
    className: React.PropTypes.string,
    heading: React.PropTypes.node,
    body: React.PropTypes.node,
    footer: React.PropTypes.node
};

Panel.defaultProps = {
    className: 'panel panel-default'
};

export default Panel
