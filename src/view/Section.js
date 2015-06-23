import React from 'react';

/**
 * Section
 */
class Section extends React.Component {

    render() {

        var content =(Array.isArray(this.props.content))? this.props.content: [this.props.content];
        var secProps = this.props.$parser.cloneProps(this.props, Section.propTypes);
        secProps.className ='container-fluid';

        content = content.map(function(schema, key) {
            return React.createElement('div', {className:'row-fluid', key:key},
                this.props.$parser.parse(schema, this.props.$context));
        }.bind(this));


        return React.createElement('section', secProps, content);

    }

}

Section.propTypes = {
    $parser: React.PropTypes.object.isRequired,
    $context : React.PropTypes.object.isRequired,
    content: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.object])
}

export default Section;
