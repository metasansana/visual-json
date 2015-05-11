import React from 'react';

class Member extends React.Component {

    render() {

        return this.props.children;
    }
}

/**
 * Wrapper wraps an array of components so React won't complain about keys.
 */
class Wrapper extends React.Component{

    render() {

        var content = this.props.content.map(function(c, i ) {

            return (<Member key={i}>{c}</Member>);

        });

        return (<span className="WRAPPER_SPAN">{content}</span>);
    }

}

Wrapper.propTypes = {

    content: React.PropTypes.array.isRequired

}
export default Wrapper

