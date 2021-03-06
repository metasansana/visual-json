'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propertySeek = require('property-seek');

var _propertySeek2 = _interopRequireDefault(_propertySeek);

var _form2 = require('./form');

var _form3 = _interopRequireDefault(_form2);

var _view2 = require('./view');

var _view3 = _interopRequireDefault(_view2);

var _state = require('./state');

var _state2 = _interopRequireDefault(_state);

var cleanView = function cleanView(schema) {

    delete schema.type;
    return schema;
};

var cleanForm = function cleanForm(schema) {

    return schema;
};

/**
 * TypeSystem provides the builtin types that can be used when parsing
 * a schema. All methods correspond to a supported type and return a React element when
 * called.
 */
exports['default'] = {

    'default': function _default(schema) {
        console.log('Unknown schema found!', schema);
        throw new Error('Unknown type supplied "' + schema.type + '" in schema with keys: [' + Object.keys(schema) + ']');
    },
    input: function input(schema, deafults, processor) {
        return _react2['default'].createElement(_form3['default'].Input, schema);
    },
    'horizontal-input': function horizontalInput(schema) {
        return _react2['default'].createElement(_form3['default'].HorizontalInput, schema);
    },
    'vertical-input': function verticalInput(schema) {
        return _react2['default'].createElement(_form3['default'].VerticalInput, schema);
    },
    form: function form(schema) {
        return _react2['default'].createElement(_form3['default'].Form, schema);
    },
    radio: function radio(schema) {
        return _react2['default'].createElement(_form3['default'].Radio, schema);
    },
    'horizontal-radio': function horizontalRadio(schema) {
        return _react2['default'].createElement(_form3['default'].HorizontalRadio, schema);
    },
    'vertical-radio': function verticalRadio(schema) {
        return _react2['default'].createElement(_form3['default'].VerticalRadio, schema);
    },
    select: function select(schema) {
        return _react2['default'].createElement(_form3['default'].Select, schema);
    },
    'horizontal-select': function horizontalSelect(schema) {
        return _react2['default'].createElement(_form3['default'].HorizontalSelect, schema);
    },
    'vertical-select': function verticalSelect(schema) {
        return _react2['default'].createElement(_form3['default'].VerticalSelect, schema);
    },
    text: function text(schema) {
        return _react2['default'].createElement(_form3['default'].Input, schema);
    },
    'horizontal-text': function horizontalText(schema) {
        return _react2['default'].createElement(_form3['default'].HorizontalInput, schema);
    },
    'vertical-text': function verticalText(schema) {
        return _react2['default'].createElement(_form3['default'].VerticalInput, schema);
    },
    textarea: function textarea(schema) {
        return _react2['default'].createElement(_form3['default'].TextArea, schema);
    },
    'horizontal-textarea': function horizontalTextarea(schema) {
        return _react2['default'].createElement(_form3['default'].HorizontalTextArea, schema);
    },
    'vertical-textarea': function verticalTextarea(schema) {
        return _react2['default'].createElement(_form3['default'].VerticalTextArea, schema);
    },
    'button': function button(schema) {
        return _react2['default'].createElement(_form3['default'].Button, schema);
    },
    panel: function panel(schema) {
        return _react2['default'].createElement(_view3['default'].Panel, cleanView(schema));
    },
    dl: function dl(schema) {
        return _react2['default'].createElement(_view3['default'].DefinitionList, cleanView(schema));
    },
    tag: function tag(schema) {
        return _react2['default'].createElement(_view3['default'].Tag, cleanView(schema));
    },
    view: function view(schema) {
        return _react2['default'].createElement(_view3['default'].View, schema);
    },
    table: function table(schema) {
        return _react2['default'].createElement(_view3['default'].Table, cleanView(schema));
    },
    'rich-table': function richTable(schema) {
        return _react2['default'].createElement(_view3['default'].RichTable, cleanView(schema));
    },
    formgroup: function formgroup(schema) {
        return _react2['default'].createElement(_view3['default'].FormGroup, cleanView(schema));
    },
    'if': function _if(schema) {
        return _react2['default'].createElement(_view3['default'].If, schema);
    },
    section: function section(schema) {
        return _react2['default'].createElement(_view3['default'].Section, schema);
    },
    location: function location(schema) {
        return _react2['default'].createElement(_state2['default'].Location, schema);
    },
    'state-button': function stateButton(schema) {
        return _react2['default'].createElement(_state2['default'].StateButton, schema);
    },
    'state-request': function stateRequest(schema) {
        return _react2['default'].createElement(_state2['default'].StateRequest, schema);
    },
    'switch': function _switch(schema) {
        return _react2['default'].createElement(_state2['default'].Switch, schema);
    },
    tabs: function tabs(schema) {
        return _react2['default'].createElement(_state2['default'].Tabs, schema);
    }

};
module.exports = exports['default'];