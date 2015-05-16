import React from 'react';
/**
 * Tag renders any html tag you desire.
 */
class Tag extends React.Component {

    render() {

        return React.createElement(this.props.tag, attrs, content);
    }

}

Tag.propTypes = {
    tag:React.PropTypes.string.isRequired,
    attrs:React.PropTypes.object,
    content:React.PropTypes.node
}

export default Tag;
