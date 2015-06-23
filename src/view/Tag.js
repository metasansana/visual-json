import React from 'react';
/**
 * Tag renders any html tag you desire.
 */
class Tag extends React.Component {
    render() {
        return React.createElement(this.props.tag, this.props,
            this.props.$parser.parse(this.props.content, this.props.$context));
    }
}

Tag.propTypes = {
    $parser: React.PropTypes.object.isRequired,
    $context : React.PropTypes.object.isRequired,
    tag:React.PropTypes.string.isRequired,
    content:React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array])
}

export default Tag;

