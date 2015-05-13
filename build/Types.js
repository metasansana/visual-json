'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dotComponent = require('dot-component');

var _dotComponent2 = _interopRequireDefault(_dotComponent);

var _viewPanel = require('./view/Panel');

var _viewPanel2 = _interopRequireDefault(_viewPanel);

var _viewDefinitionList = require('./view/DefinitionList');

var _viewDefinitionList2 = _interopRequireDefault(_viewDefinitionList);

var _viewTable = require('./view/Table');

var _viewTable2 = _interopRequireDefault(_viewTable);

var _viewTag = require('./view/Tag');

var _viewTag2 = _interopRequireDefault(_viewTag);

var _viewContainer = require('./view/Container');

var _viewContainer2 = _interopRequireDefault(_viewContainer);

var _viewView = require('./view/View');

var _viewView2 = _interopRequireDefault(_viewView);

var _formForm = require('./form/Form');

var _formForm2 = _interopRequireDefault(_formForm);

var _formFormGroup = require('./form/FormGroup');

var _formFormGroup2 = _interopRequireDefault(_formFormGroup);

var _formTextArea = require('./form/TextArea');

var _formTextArea2 = _interopRequireDefault(_formTextArea);

var _formSelect = require('./form/Select');

var _formSelect2 = _interopRequireDefault(_formSelect);

var _formRadio = require('./form/Radio');

var _formRadio2 = _interopRequireDefault(_formRadio);

var _formInput = require('./form/Input');

var _formInput2 = _interopRequireDefault(_formInput);

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

        throw new Error('Unknown type supplied ' + schema.type + ' check this schema: ' + JSON.stringify(schema));
    },

    view: function view(schema) {

        return _react2['default'].createElement(_viewView2['default'], schema);
    },

    input: function input(schema, deafults, processor) {
        return _react2['default'].createElement(_formInput2['default'], schema);
    },

    tag: function tag(schema, defaults, processor) {

        return _react2['default'].createElement(_viewTag2['default'], cleanView(schema));
    },

    container: function container(schema, defaults, processor) {
        return _react2['default'].createElement(_viewContainer2['default'], cleanView(schema));
    },

    /**
     * form generates a html form
     * @param {Object} schema
     * @param {Object} defaults
     * @param {Parser} processor
     */
    form: function form(schema, defaults, processor) {

        var args = [];
        args.push(_formForm2['default']);
        args.push(schema);
        args = args.concat(schema.controls);
        delete schema.controls;
        return _react2['default'].createElement.apply(_react2['default'], args);
    },

    radio: function radio(schema, defaults, processor) {

        if (defaults) schema.defaultValue = _dotComponent2['default'].get(defaults, schema.name);

        return _react2['default'].createElement(_formRadio2['default'], schema);
    },

    select: function select(schema, defaults, processor) {

        if (defaults) schema.defaultValue = _dotComponent2['default'].get(defaults, schema.name);

        return _react2['default'].createElement(_formSelect2['default'], schema);
    },

    text: function text(schema, defaults, processor) {
        return _react2['default'].createElement(_formInput2['default'], schema);
    },

    textarea: function textarea(schema, defaults, processor) {

        return _react2['default'].createElement(_formTextArea2['default'], schema);
    },

    panel: function panel(schema, defaults, processor) {

        return _react2['default'].createElement(_viewPanel2['default'], cleanView(schema));
    },

    /**
     * dl renders a definition list
     * @param {Object} schema
     * @param {Object} defaults
     * @param {Parser} processor
     */
    dl: function dl(schema, defaults, processor) {

        schema.data = schema.data || schema.defaultValue || defaults;
        return _react2['default'].createElement(_viewDefinitionList2['default'], cleanView(schema));
    },

    table: function table(schema, defaults, processor) {

        schema.data = schema.data || schema.defaultValue || defaults;
        return _react2['default'].createElement(_viewTable2['default'], cleanView(schema));
    },

    /**
     * formgroup renders a FormGroup control.
     *
     * schema.controls.0.control are first converted to a valid React.Element
     * @param {Object} schema
     * @param {Object} defaults
     * @param {Parser} processor
     */
    formgroup: function formgroup(schema, defaults, processor) {
        return _react2['default'].createElement(_formFormGroup2['default'], cleanView(schema));
    }

};
module.exports = exports['default'];