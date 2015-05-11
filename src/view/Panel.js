import React from 'react';

/**
 * Panel
 */
class Panel extends React.Component {

    render() {

        var style = this.props.className || 'panel-default';

        return (
            <div className={'panel '+style}>
                {(this.props.heading)?<div className="panel-heading">{this.props.heading}</div>: ''}
                {(this.props.body)?<div className="panel-body">{this.props.body}</div>: ''}
                {(this.props.children)?<div className="panel-body">{this.props.children}</div>: ''}
                {(this.props.table)?this.props.table: ''}
                {(this.props.footer)?<div className="panel-footer">{this.props.footer}</div>: ''}
            </div>
        );

    }

}

Panel.propTypes = {
    className: React.PropTypes.string,
    heading: React.PropTypes.node,
    body: React.PropTypes.node,
    table: React.PropTypes.node,
    footer: React.PropTypes.node
}

export default Panel;
