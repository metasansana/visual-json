import React from 'react/addons';
import CheckBox from '../CheckBox';

var Test = React.addons.TestUtils;
var set;
var ele;
var node;
var control;

describe('Input', function () {

    beforeEach(function () {

        set = jest.genMockFunction().mockImplementation(
            function (name, value) {
                console.log(arguments);
                return this;
            });

    });

    describe('CheckBox#render', function () {

        it('it should render the correct markup', function () {

            expect(React.renderToStaticMarkup(
                React.createElement(CheckBox, {name: "name", set: set}, 'A Box'))).
                toBe('<div class="checkbox"><label><input type="checkbox" name="name">A Box</label></div>');

        });

        it('it should render the correct markup with defaults', function () {
            //This test probably makes no sense as react does not render a checked attribute
            expect(React.renderToStaticMarkup(
                React.createElement(CheckBox, {
                    name: "selected",
                    type: 'checkbox',
                    set: set,
                    value: false
                }))).
                toBe('<div class="checkbox"><label><input type="checkbox" name="selected"></label></div>');
        });
    });

    describe('CheckBox events', function () {

        it('should call `set` onChange', function () {

            ele = Test.renderIntoDocument(React.createElement(CheckBox, {name: "name", set: set}));
            node = Test.findRenderedDOMComponentWithTag(ele, 'input');
            Test.Simulate.change(node, {target: {name: node.getDOMNode().name}});
            expect(set.mock.calls.length).toEqual(1);

        });


    });


});
