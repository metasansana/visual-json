import React from 'react/addons';
import Select from '../Select';
import HorizontalSelect from '../HorizontalSelect';
import VerticalSelect from '../VerticalSelect';

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
    node = Test.findRenderedDOMComponentWithTag(ele, 'select');
    Test.Simulate.change(node, {target: {name: node.getDOMNode().name}});
    expect(set.mock.calls.length).toEqual(1);

};

beforeEach(function () {
    set = jest.genMockFunction();
});

describe('Select', function () {

    beforeEach(function () {
        Component = Select;
        correctMarkup = '<select name="name" type="select" class="form-control"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select>';
        correctMarkupWithDefaults = '<select name="defaults" type="select" class="form-control"><option value="why">why</option><option value="you">you</option><option value="yes">yes</option><option value="sir">sir</option></select>';
    });

    describe('Select#render', function () {

        it('it should render the correct markup', $=>testCorrectMarkup({
            name: "name",
            set: set,
            options: [1, 2, 3, 4, 5]
        }));

        it('it should render the correct markup with defaults', $=>testCorrectMarkupWithDefaults({
            name: "defaults",
            type: 'select',
            set: set,
            value: 'yes',
            options: ['why', 'you', 'yes', 'sir']
        }));
    });

    describe('Select events', $=>it('should call `set` onChange', $=>testChange({name: "name", set: set})))


});

describe('HorizontalSelect', function () {

    beforeEach(function () {
        Component = HorizontalSelect;
        correctMarkup = '<div class="form-group"><label class="col-md-4">Name</label><div class="col-md-8"><select name="name" type="select" class="form-control"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div></div>';
        correctMarkupWithDefaults = '<div class="form-group"><label class="col-md-4">Defaults</label><div class="col-md-8"><select name="defaults" type="select" class="form-control"><option value="why">why</option><option value="you">you</option><option value="yes">yes</option><option value="sir">sir</option></select></div></div>';
    });

    describe('HorizontalSelect#render', function () {

        it('it should render the correct markup',
                $=>testCorrectMarkup({name: "name", 'set': set, labelValue: 'Name', options: [1, 2, 3, 4, 5]}));

        it('it should render the correct markup with defaults',
                $=>testCorrectMarkupWithDefaults({
                name: "defaults",
                type: 'select',
                set: set,
                labelValue: 'Defaults',
                value: 'yes',
                options: ['why', 'you', 'yes', 'sir']
            }));
    });

});

describe('VerticalSelect', function () {

    beforeEach(function () {
        Component = VerticalSelect;
        correctMarkup = '<div class="form-group"><label>Name</label><select name="name" type="select" class="form-control"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option></select></div>';
        correctMarkupWithDefaults = '<div class="form-group"><label>Defaults</label><select name="defaults" type="select" class="form-control"><option value="why">why</option><option value="you">you</option><option value="yes">yes</option><option value="sir">sir</option></select></div>';
    });

    describe('VerticalSelect#render', function () {

        it('it should render the correct markup',
                $=>testCorrectMarkup({name: "name", 'set': set, labelValue: 'Name', options: [1, 2, 3, 4, 5]}));

        it('it should render the correct markup with defaults',
                $=>testCorrectMarkupWithDefaults({
                name: "defaults",
                type: 'select',
                set: set,
                labelValue: 'Defaults',
                value: 'yes',
                options: ['why', 'you', 'yes', 'sir']
            }));
    });

});

