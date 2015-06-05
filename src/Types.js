import React from 'react';
import dot from 'dot-component';
import form from './form';
import view from './view';
import state from './state';

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
        console.log('Unknown schema found!', schema);
        throw new Error('Unknown type supplied "' + schema.type+'" in schema with keys: ['+Object.keys(schema)+']');

    },
    input: function (schema, deafults, processor) {
        return React.createElement(form.Input, schema);
    },
    form: function (schema) {
        return React.createElement(form.Form, schema);
    },
    radio: function (schema) {
        return React.createElement(form.Radio, schema);
    },
    'horizontal-radio': function (schema) {
        return React.createElement(form.HorizontalRadio, schema);
    },
    'vertical-radio': function (schema) {
        return React.createElement(form.VerticalRadio, schema);
    },
    select: function (schema) {
        return React.createElement(form.Select, schema);
    },
    'horizontal-select': function (schema) {
        return React.createElement(form.HorizontalSelect, schema);
    },
    'vertical-select': function (schema) {
        return React.createElement(form.VerticalSelect, schema);
    },
    text: function (schema) {
        return React.createElement(form.Input, schema);
    },
    'horizontal-text': function (schema) {
        return React.createElement(form.HorizontalInput, schema);
    },
    'vertical-text': function (schema) {
        return React.createElement(form.VerticalInput, schema);
    },
    textarea: function (schema) {
        return React.createElement(form.TextArea, schema);
    },
    'horizontal-textarea': function (schema) {
        return React.createElement(form.HorizontalTextArea, schema);
    },
    'vertical-textarea': function (schema) {
        return React.createElement(form.VerticalTextArea, schema);
    },
    'button': function(schema) {
        return React.createElement(form.Button, schema);
    },
    panel: function (schema) {
        return React.createElement(view.Panel, cleanView(schema));
    },
    dl: function (schema) {
        return React.createElement(view.DefinitionList, cleanView(schema));
    },
    tag: function (schema) {
        return React.createElement(view.Tag, cleanView(schema));
    },
    view: function(schema){
        return React.createElement(view.View,schema);
    },
    table: function(schema) {
        return React.createElement(view.Table, cleanView(schema));
    },
    formgroup: function (schema) {
        return React.createElement(view.FormGroup, cleanView(schema));
    },
    location: function(schema) {
        return React.createElement(state.Location, schema);
    },
    'state-button': function(schema) {
        return React.createElement(state.StateButton, schema);
    },
    'state-request': function(schema) {
        return React.createElement(state.StateRequest, schema);
    },
    switch: function(schema) {
        return React.createElement(state.Switch, schema);
    },
    tabs: function(schema) {
        return React.createElement(state.Tabs, schema);
    }


}

