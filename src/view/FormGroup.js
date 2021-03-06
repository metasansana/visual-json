import React from 'react';

class Wrapper extends React.Component {

    render() {

        var childs = this.props.children;

        if(!Array.isArray(childs));
        childs = [childs];

        var args = ['div', {className:this.props.wrapClass}].concat(childs);

        return React.createElement.apply(React, args);

    }

}
/**
 * FormGroup
 */
class FormGroup extends React.Component {

    render() {

        var label;
        var controlSpec;
        var component;
        var parser = this.props.$parser;
        var $context = this.props.$context;

        if (this.props.label)
            label = (<label className={'control-label '+this.props.label.className} {...this.props.label.attrs}>
                {this.props.label.value}</label>);

        if (this.props.controls.length === 1) {

            controlSpec = this.props.controls[0];

            if (controlSpec.wrapClass) {
                component = (
                    <Wrapper wrapClass={controlSpec.wrapClass}>
                        {parser.parse(controlSpec.control, $context)}
                    </Wrapper>);
            } else {
                component = controlSpec.control;
            }
        } else {

            component = this.props.controls.map(function (spec, i) {

                if (spec.wrapClass)
                    return (
                        <Wrapper key={i} wrapClass={spec.wrapClass}>
                            {parser.parse(spec.control, $context)}
                        </Wrapper>);

                return spec.control;
            });

        }

        if(!Array.isArray(component))
        component = [component];

        var args = ['div', {className:'form-group'}, label].concat(component);
        return React.createElement.apply(React, args);

    }


}

FormGroup.propTypes = {
    $parser: React.PropTypes.object.isRequired,
    $context : React.PropTypes.object.isRequired,
    label: React.PropTypes.shape({
        className: React.PropTypes.string,
        value: React.PropTypes.node.isRequired,
        attrs: React.PropTypes.object
    }),
    controls: React.PropTypes.arrayOf(React.PropTypes.shape({
        wrapClass: React.PropTypes.string,
        control: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.array]).isRequired
    })).isRequired

}

export default FormGroup;

