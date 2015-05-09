import React from 'react';

import Input from './Input';
import TextArea from './TextArea';
import Radio from './Radio';
import DefinitionList from './DefinitionList';
import AnyRange from './AnyRange';
import Select from './Select';

class Shim extends React.Component{

    render() {
        return this.props.children;
    }

}
/**
 * FormGroup
 */
class FormGroup extends React.Component {

    render() {

        var label;

        if (this.props.label)
            label = (<label className={'control-label '+this.props.label.className} {...this.props.label.attrs}>
                {this.props.label.value}</label>);

        var controls = this.props.controls.map(function (control, i) {

            if (control.wrapName)
                return (<div key={i} className={control.wrapName}>{control.control}</div>)

            return <Shim key={i}>{control.control}</Shim>;
        });

        return (
            <div className="form-group">
                {label}
                {controls}
            </div>
        )
    }


}

FormGroup.propTypes = {
    label: React.PropTypes.shape({
        className: React.PropTypes.string,
        value: React.PropTypes.node.isRequired,
        attrs: React.PropTypes.object
    }),
    controls: React.PropTypes.arrayOf(React.PropTypes.shape({
       wrapClass: React.PropTypes.string
//       control: React.PropTypes.element.isRequired
   })).isRequired

}

export default FormGroup;

