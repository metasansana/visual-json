import ReactType from '../ReactType';
import form from './form';
import view from './view';

var types = {
    form: new ReactType(form.Form),
    link: new ReactType(form.Anchor),
    button: new ReactType(form.Button),
    'button-group': new ReactType(form.ButtonGroup),
    'button-dropdown': new ReactType(form.ButtonDropDown),
    'dropdown-header': new ReactType(form.DropDownHeader),
    'dropdown-divider': new ReactType(form.DropDownDivider),
    'dropdown-item': new ReactType(form.DropDownItem),
    input: new ReactType(form.Input),
    text: new ReactType(form.Input),
    radio: new ReactType(form.Radio),
    checkbox: new ReactType(form.CheckBox),
    select: new ReactType(form.Select),
    textarea: new ReactType(form.TextArea),
    'stacked-radio': new ReactType(form.StackedCheckBox),
    'stacked-checkbox': new ReactType(form.StackedCheckBox),
    'horizontal-control': new ReactType(form.HorizontalControl),
    'horizontal-group': new ReactType(form.HorizontalGroup),
    'horizontal-input': new ReactType(form.HorizontalInput),
    'horizontal-text': new ReactType(form.HorizontalInput),
    'horizontal-select': new ReactType(form.HorizontalSelect),
    'horizontal-textarea': new ReactType(form.HorizontalTextArea),
    'vertical-input': new ReactType(form.VerticalInput),
    'vertical-text': new ReactType(form.VerticalInput),
    'vertical-select': new ReactType(form.VerticalSelect),
    'vertical-textarea': new ReactType(form.VerticalTextArea),
    panel: new ReactType(view.Panel),
    'panel-heading': new ReactType(view.PanelHeading),
    'panel-body': new ReactType(view.PanelBody),
    'panel-footer': new ReactType(view.PanelFooter),
    column: new ReactType(view.Column),
    row: new ReactType(view.Row),
    dl: new ReactType(view.DefinitionList),
    view: new ReactType(view.View),
    table: new ReactType(view.Table),
    container: new ReactType(view.Container),
    tab: new ReactType(view.Tab),
    'nav-list': new ReactType(view.NavList),
    icon: new ReactType(view.IconFont)
};

export default {
    types: types,
    install: function (env) {
        for (var key in types)
            if (types.hasOwnProperty(key))
                env.addType(key, types[key])
    }
}