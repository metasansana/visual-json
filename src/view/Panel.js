import React from 'react';

/**
 * Panel
 */
class Panel extends React.Component {

    render() {

        var style = this.props.className || 'panel-default';
        var parser = this.props.$parser;

        return (
            <div className={'panel '+style}>
                {(this.props.heading)?<div className="panel-heading">{parser.parse(this.props.heading,this.props.$context)}</div>: ''}
                {(this.props.body)?<div className="panel-body">{parser.parse(this.props.body, this.props.$context)}</div>: ''}
                {(this.props.table)?parser.parse(this.props.table, this.props.$context): null}
                {(this.props.footer)?<div className="panel-footer">{parser.parse(this.props.footer, this.props.$context)}</div>: ''}
            </div>
        );

    }

}

Panel.propTypes = {
    $parser: React.PropTypes.object.isRequired,
    $context : React.PropTypes.object.isRequired,
    className: React.PropTypes.string,
    heading: React.PropTypes.oneOfType([React.PropTypes.node, React.PropTypes.object, React.PropTypes.array]),
    body: React.PropTypes.oneOfType([React.PropTypes.node, React.PropTypes.object, React.PropTypes.array]),
    table: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]),
    footer: React.PropTypes.oneOfType([React.PropTypes.node, React.PropTypes.object, React.PropTypes.array])
}

export default Panel;
