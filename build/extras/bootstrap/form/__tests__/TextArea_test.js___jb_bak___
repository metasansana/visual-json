import React from 'react/addons';
import TextArea from '../TextArea';
import HorizontalTextArea from '../HorizontalTextArea';
import VerticalTextArea from '../VerticalTextArea';

var Test = React.addons.TestUtils;
var set;
var ele;
var calls;
var node;
var control;
var Component;
var correctMarkup;
var correctMarkupWithDefaults;

var testCorrectMarkup = function (props, childs) {
    expect(React.renderToStaticMarkup(
        React.createElement(Component, props, childs || null))).
        toBe(correctMarkup);

};

var testCorrectMarkupWithDefaults = function (props, childs) {

    expect(React.renderToStaticMarkup(
        React.createElement(Component, props, childs || null))).
        toBe(correctMarkupWithDefaults);

};

var testChange = function (props, childs) {

    ele = Test.renderIntoDocument(React.createElement(Component, props, childs));
    node = Test.findRenderedDOMComponentWithTag(ele, 'textarea');
    Test.Simulate.change(node, {target: {name: node.getDOMNode().name}});
    expect(set.mock.calls.length).toEqual(1);

};

beforeEach(function () {
    set = jest.genMockFunction();
});

describe('Textarea', function () {

    beforeEach(function () {
        Component = TextArea;
        correctMarkup = `<textarea name="name" class="form-control" type="textarea">
</textarea>`;
        correctMarkupWithDefaults = `<textarea name="defaults" type="textarea" class="form-control">
yes</textarea>`;
    });

    describe('Textarea#render', function () {

        it('it should render the correct markup', $=>testCorrectMarkup({name: "name", set: set}));

        it('it should render the correct markup with defaults', $=>testCorrectMarkupWithDefaults({
            name: "defaults",
            type: 'textarea',
            set: set,
            value: 'yes'
        }));
    });

    describe('Textarea events', $=>it('should call `set` onChange', $=>testChange({name: "name", set: set})))


});

describe('HorizontalTextarea', function () {

    beforeEach(function () {
        Component = HorizontalTextArea;
        correctMarkup = `<div class="form-group"><label class="col-md-4">Name</label><div class="col-md-8"><textarea name="name" class="form-control" type="textarea">
</textarea></div></div>`;
        correctMarkupWithDefaults = `<div class="form-group"><label class="col-md-4">Defaults</label><div class="col-md-8"><textarea name="defaults" type="textarea" class="form-control">
yes</textarea></div></div>`;
    });

    describe('HorizontalTextarea#render', function () {

        it('it should render the correct markup',
                $=>testCorrectMarkup({name: "name", 'set': set, labelValue: 'Name'}));

        it('it should render the correct markup with defaults',
                $=>testCorrectMarkupWithDefaults({
                name: "defaults",
                type: 'textarea',
                set: set,
                labelValue: 'Defaults',
                value: 'yes'
            }));
    });

});

describe('VerticalTextarea', function () {

    beforeEach(function () {
        Component = VerticalTextArea;
        correctMarkup = `<div class="form-group"><label>Name</label><textarea name="name" class="form-control" type="textarea">
</textarea></div>`;
        correctMarkupWithDefaults = `<div class="form-group"><label>Defaults</label><textarea name="defaults" type="textarea" class="form-control">
yes</textarea></div>`;
    });

    describe('VerticalTextarea#render', function () {

        it('it should render the correct markup',
                $=>testCorrectMarkup({name: "name", 'set': set, labelValue: 'Name'}));

        it('it should render the correct markup with defaults',
                $=>testCorrectMarkupWithDefaults({
                name: "defaults",
                type: 'textarea',
                set: set,
                labelValue: 'Defaults',
                value: 'yes'
            }));
    });

});

