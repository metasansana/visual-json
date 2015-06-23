import React from 'react';
/**
 * View
 */
class View extends React.Component {

    render() {
        return React.createElement('div', {className:"json-markup-view"},
            this.props.$parser.parse(this.props.content, this.props.$context));

    }
}

View.propTypes = {
    $parser: React.PropTypes.object.isRequired,
    $context : React.PropTypes.object.isRequired,
    content: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array])
}
export default View;