import React from 'react';

/**
 * HtmlElement renders an html element
 */
class HTMLElement extends React.Component {

    render() {
        var {tag, attributes} = this.props;
        return React.createElement(tag, attributes, ...this.props.children);
    }

}

HTMLElement.propTypes = {
    tag: React.PropTypes.string.isRequired,
    attributes: React.PropTypes.object
};

export default HTMLElement
