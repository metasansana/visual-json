import React from './React';

import Panel from './Panel';
import DefinitionList from './DefinitionList';
import FormControls from './FormControls';

/**
 * TypeSystem provides the builtin types that can be used when parsing
 * a schema. All methods correspond to a supported type and return a React element when
 * called.
 */
export default {
    default:function(schema, defaults, processor){

    },
    panel: function(schema, defaults, processor){

    },
    text: function(schema, defaults, processor){
        return this.default(schema, defaults, processor);
    },
    textarea:function(schema, defaults, processor){

    },
    anyrange:function(schema, defaults, processor){

    },
    dl:function(schema, defaults, processor){

    },
    formgroup: function(schema, defaults, processor) {

        if(Array.isArray(schema.controls))
        schema.controls = schema.controls.map(function(control) {

            if(!control.control)
            throw new Error('FormGroup controls must have a control schema!');

            control.control = processor.process(control, defaults);

        });

        React.createElement(FormGroup, schema);
    }

}

