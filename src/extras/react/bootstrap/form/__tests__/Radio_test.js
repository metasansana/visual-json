import React from 'react/addons';
import Radio from '../Radio';
import StackedRadio from '../StackedRadio';

var Test = React.addons.TestUtils;
var set;
var ele;
var node;
var control;
var Component;
var correctMarkup;
var correctMarkupWithDefaults;

var testCorrectMarkup = function (props, childs) {
    return function () {
        expect(React.renderToStaticMarkup(
            React.createElement(Component, props, childs||null))).
            toBe(correctMarkup);
    }

};

var testCorrectMarkupWithDefaults = function (props, childs) {
    return function () {
        expect(React.renderToStaticMarkup(
            React.createElement(Component, props, childs||null))).
            toBe(correctMarkupWithDefaults);
    }
};

var testChange = function () {
    ele = Test.renderIntoDocument(React.createElement(Component, {name: "name", set: set}));
    node = Test.findRenderedDOMComponentWithTag(ele, 'input');
    Test.Simulate.change(node, {target: {name: node.getDOMNode().name}});
    expect(set.mock.calls.length).toEqual(1);
};

beforeEach(function () {
    set = jest.genMockFunction();
});

describe('Radio', function () {

    beforeEach(function () {
        Component = Radio;
        correctMarkup = '<label><input name="name" type="radio">A Box</label>';
        correctMarkupWithDefaults = '<label><input name="selected" type="radio"></label>';
    });

    describe('Radio#render', function () {

        it('it should render the correct markup', testCorrectMarkup({name: "name", set: set}, 'A Box'));
        it('it should render the correct markup with defaults', testCorrectMarkupWithDefaults({
            name: "selected",
            type: 'radio',
            set: set,
            checked: false
        },null))

    });

    describe('Radio events', function () {
        it('should call `set` onChange', testChange);
    });

});

describe('StackedRadio', function () {

    beforeEach(function () {
        Component = StackedRadio;
        correctMarkup = '<div class="radio"><label><input name="name" type="radio">A Box</label></div>';
        correctMarkupWithDefaults = '<div class="radio"><label><input name="selected" type="radio"></label></div>';
    });

    describe('StackedRadio#render', function () {

        it('it should render the correct markup', testCorrectMarkup({name: "name", set: set}, 'A Box'));
        it('it should render the correct markup with defaults', testCorrectMarkupWithDefaults({
            name: "selected",
            type: 'radio',
            set: set,
            checked: false
        },null))

    });


});



