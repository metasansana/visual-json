import React from 'react';
/**
 * View
 */
class View extends React.Component {

    render() {

        if (Array.isArray(this.props.content)) {
            if (this.props.content.length === 1)
                return this.props.content[0];

            return (
                <span className="IGNORED_WRAPPER_FOR_REACT">
                    {this.props.content.map(function (c, i) {
                        return (<span className="IGNORED_WRAPPER_FOR_REACT_KEYS" key={i}>{c}</span>)
                    })}
                    </span>);
        }
        return this.props.content;
    }
}

View.propTypes = {
    content: React.PropTypes.node.isRequired
}
export default View;