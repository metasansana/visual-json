import React from 'react';

import Input from './Input';
import TextArea from './TextArea';
import Radio from './Radio';
import DefinitionList from './DefinitionList';
import AnyRange from './AnyRange';
import Select from './Select';

var controls = {
    'text': Input,
    'textarea': TextArea,
    'radio': Radio,
    'anyrange': AnyRange,
    'select': Select
};


/**
 * FormControls
 */
class FormControls extends React.Component {


    renderControlWithLabel(control) {

        return (<div className="form-group">
            <label className="col-md-4 control-label">{this.props.label}</label>
            {control}
        </div>);

    }

    render() {

        var control = controls[this.props.type];

        if (!control) control = controls['text'];

        if (control.isPreWrapped)
            return this.renderControlWithLabel(React.createElement(control, this.props, this.children));

        var content = (<div className="col-md-8">
            {React.createElement(control, this.props, this.children)}
        </div>);

        return this.renderControlWithLabel(content);
    }


}

export default FormControls;

