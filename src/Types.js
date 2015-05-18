import React from 'react';
import dot from 'dot-component';

import Panel from './view/Panel';
import DefinitionList from './view/DefinitionList';
import Table from './view/Table';
import Tag from './view/Tag';
import Container from './view/Container';
import View from './view/View';

import Form from './form/Form';
import FormGroup from './form/FormGroup';
import TextArea from './form/TextArea';
import Select from './form/Select';
import Radio from './form/Radio';
import Input from './form/Input';

var cleanView = function (schema) {

    delete schema.type;
    return schema;
};

var cleanForm = function (schema) {

    return schema;
};

/**
 * TypeSystem provides the builtin types that can be used when parsing
 * a schema. All methods correspond to a supported type and return a React element when
 * called.
 */
export default {

    default: function (schema) {

        throw new Error('Unknown type supplied "' + schema.type+'" in schema with keys: ['+Object.keys(schema)+']');

    },

    view: function(schema){

        return React.createElement(View,schema);

    },

    input: function (schema, deafults, processor) {
        return React.createElement(Input, schema);
    },

    tag: function (schema, defaults, processor) {

        return React.createElement(Tag, cleanView(schema));


    },

    container: function (schema, defaults, processor) {
        return React.createElement(Container, cleanView(schema));
    },

    /**
     * form generates a html form
     * @param {Object} schema
     * @param {Object} defaults
     * @param {Parser} processor
     */
    form: function (schema, defaults, processor) {

        var args = [];
        args.push(Form);
        args.push(schema);
        args = args.concat(schema.controls);
        delete schema.controls;
        return React.createElement.apply(React, args);
    },

    radio: function (schema, defaults, processor) {

        if (defaults)
            schema.defaultValue = dot.get(defaults, schema.name);

        return React.createElement(Radio, schema);

    },

    select: function (schema, defaults, processor) {

        if (defaults)
            schema.defaultValue = dot.get(defaults, schema.name);

        return React.createElement(Select, schema);

    },

    text: function (schema, defaults, processor) {
        return React.createElement(Input, schema);
    },


    textarea: function (schema, defaults, processor) {

        return React.createElement(TextArea, schema);

    },

    panel: function (schema, defaults, processor) {

        return React.createElement(Panel, cleanView(schema));

    },

    /**
     * dl renders a definition list
     * @param {Object} schema
     * @param {Object} defaults
     * @param {Parser} processor
     */
    dl: function (schema, defaults, processor) {
        schema.data = schema.data || schema.defaultValue || defaults;
        return React.createElement(DefinitionList, cleanView(schema));
    },

    table: function(schema, defaults, processor) {

        schema.data = schema.data || schema.defaultValue || defaults;
        return React.createElement(Table, cleanView(schema));

    },

    /**
     * formgroup renders a FormGroup control.
     *
     * schema.controls.0.control are first converted to a valid React.Element
     * @param {Object} schema
     * @param {Object} defaults
     * @param {Parser} processor
     */
    formgroup: function (schema, defaults, processor) {
        return React.createElement(FormGroup, cleanView(schema));
    }

}

