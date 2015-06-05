import React from 'react';

/**
 * Section
 */
class Section extends React.Component {

    render() {

        return React.createElement('section', this.$parser.cloneProps(this.props),
            this.$parser.parseObjectLike(this.props.content));

    }

}

Section.propTypes = {
    $parser: React.PropTypes.object.isRequired,
    content: React.PropTypes.oneOf([React.PropTypes.arrayOf(React.PropTypes.object), React.PropTypes.object])
}

export default Section;