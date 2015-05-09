import React from 'react';

/**
 * Panel
 */
class Panel extends React.Component {

    render() {

        var style = this.props.bsStyle || 'default';

        return (
            <div className={'panel panel-'+style}>
                <div className="panel-heading">{this.props.title}</div>
                <div className="panel-body">
                {this.props.children}
                </div>
            </div>
        );

    }

}

Panel.propTypes = {
    bsStyle: React.PropTypes.string,
    title:React.PropTypes.string
}

export default Panel;
