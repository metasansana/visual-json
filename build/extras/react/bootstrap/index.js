'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ReactType = require('../ReactType');

var _ReactType2 = _interopRequireDefault(_ReactType);

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

var _view = require('./view');

var _view2 = _interopRequireDefault(_view);

var types = {

    'nav-link': new _ReactType2['default'](_form2['default'].NavLink),
    link: new _ReactType2['default'](_form2['default'].Anchor),
    button: new _ReactType2['default'](_form2['default'].Button),
    'button-group': new _ReactType2['default'](_form2['default'].ButtonGroup),
    'button-dropdown': new _ReactType2['default'](_form2['default'].ButtonDropDown),
    'dropdown-header': new _ReactType2['default'](_form2['default'].DropDownHeader),
    'dropdown-divider': new _ReactType2['default'](_form2['default'].DropDownDivider),
    'dropdown-item': new _ReactType2['default'](_form2['default'].DropDownItem),
    form: new _ReactType2['default'](_form2['default'].Form),
    input: new _ReactType2['default'](_form2['default'].Input),
    text: new _ReactType2['default'](_form2['default'].Input),
    radio: new _ReactType2['default'](_form2['default'].Radio),
    checkbox: new _ReactType2['default'](_form2['default'].CheckBox),
    select: new _ReactType2['default'](_form2['default'].Select),
    textarea: new _ReactType2['default'](_form2['default'].TextArea),
    'stacked-radio': new _ReactType2['default'](_form2['default'].StackedCheckBox),
    'stacked-checkbox': new _ReactType2['default'](_form2['default'].StackedCheckBox),
    'horizontal-control': new _ReactType2['default'](_form2['default'].HorizontalControl),
    'horizontal-group': new _ReactType2['default'](_form2['default'].HorizontalGroup),
    'horizontal-input': new _ReactType2['default'](_form2['default'].HorizontalInput),
    'horizontal-text': new _ReactType2['default'](_form2['default'].HorizontalInput),
    'horizontal-select': new _ReactType2['default'](_form2['default'].HorizontalSelect),
    'horizontal-textarea': new _ReactType2['default'](_form2['default'].HorizontalTextArea),
    'vertical-input': new _ReactType2['default'](_form2['default'].VerticalInput),
    'vertical-text': new _ReactType2['default'](_form2['default'].VerticalInput),
    'vertical-select': new _ReactType2['default'](_form2['default'].VerticalSelect),
    'vertical-textarea': new _ReactType2['default'](_form2['default'].VerticalTextArea),
    panel: new _ReactType2['default'](_view2['default'].Panel),
    'panel-heading': new _ReactType2['default'](_view2['default'].PanelHeading),
    'panel-body': new _ReactType2['default'](_view2['default'].PanelBody),
    'panel-footer': new _ReactType2['default'](_view2['default'].PanelFooter),
    column: new _ReactType2['default'](_view2['default'].Column),
    row: new _ReactType2['default'](_view2['default'].Row),
    dl: new _ReactType2['default'](_view2['default'].DefinitionList),
    view: new _ReactType2['default'](_view2['default'].View),
    table: new _ReactType2['default'](_view2['default'].Table),
    container: new _ReactType2['default'](_view2['default'].Container),
    tab: new _ReactType2['default'](_view2['default'].Tab),
    'nav-list': new _ReactType2['default'](_view2['default'].NavList),
    'html-element': new _ReactType2['default'](_view2['default'].HTMLElement),
    'breadcrumb': new _ReactType2['default'](_view2['default'].BreadCrumb),
    'list-item': new _ReactType2['default'](_view2['default'].ListItem),
    icon: new _ReactType2['default'](_view2['default'].IconFont)
};

exports['default'] = {
    types: types,
    install: function install(env) {
        for (var key in types) if (types.hasOwnProperty(key)) env.addType(key, types[key]);
    }
};
module.exports = exports['default'];