import React from 'react/addons';
import Input from '../Input';
import HorizontalInput from '../HorizontalInput';
import VerticalInput from '../VerticalInput';

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
    node = Test.findRenderedDOMComponentWithTag(ele, 'input');
    Test.Simulate.change(node, {target: {name: node.getDOMNode().name}});
    expect(set.mock.calls.length).toEqual(1);

};

beforeEach(function () {
    set = jest.genMockFunction();
});

describe('Input', function () {

    beforeEach(function () {
        Component = Input;
        correctMarkup = '<input name="name" class="form-control" type="text">';
        correctMarkupWithDefaults = '<input name="defaults" type="text" value="yes" class="form-control">';
    });

    describe('Input#render', function () {

        it('it should render the correct markup', $=>testCorrectMarkup({name: "name", set: set}));

        it('it should render the correct markup with defaults', $=>testCorrectMarkupWithDefaults({
            name: "defaults",
            type: 'input',
            set: set,
            value: 'yes'
        }));
    });

    describe('Input events', $=>it('should call `set` onChange', $=>testChange({name: "name", set: set})))


});

describe('HorizontalInput', function () {

    beforeEach(function () {
        Component = HorizontalInput;
        correctMarkup = '<div class="form-group"><label class="col-md-4">Name</label><div class="col-md-8"><input name="name" class="form-control" type="text"></div></div>';
        correctMarkupWithDefaults = '<div class="form-group"><label class="col-md-4">Defaults</label><div class="col-md-8"><input name="defaults" type="text" value="yes" class="form-control"></div></div>';
    });

    describe('HorizontalInput#render', function () {

        it('it should render the correct markup',
                $=>testCorrectMarkup({name: "name", 'set': set, labelValue: 'Name'}));

        it('it should render the correct markup with defaults',
                $=>testCorrectMarkupWithDefaults({
                name: "defaults",
                type: 'input',
                set: set,
                labelValue: 'Defaults',
                value: 'yes'
            }));
    });

});

describe('VerticalInput', function () {

    beforeEach(function () {
        Component = VerticalInput;
        correctMarkup = '<div class="form-group"><label>Name</label><input name="name" class="form-control" type="text"></div>';
        correctMarkupWithDefaults = '<div class="form-group"><label>Defaults</label><input name="defaults" type="text" value="yes" class="form-control"></div>';
    });

    describe('VerticalInput#render', function () {

        it('it should render the correct markup',
                $=>testCorrectMarkup({name: "name", 'set': set, labelValue: 'Name'}));

        it('it should render the correct markup with defaults',
                $=>testCorrectMarkupWithDefaults({
                name: "defaults",
                type: 'input',
                set: set,
                labelValue: 'Defaults',
                value: 'yes'
            }));
    });

});

