import React from 'react/addons';

import Select from '../Select';

var Test = React.addons.TestUtils;
var model;

describe('Select', function () {

    beforeEach(function () {

        model =
        {
            model: {},

            set: jest.genMockFunction().mockImplementation(
                function (name, value, control, target) {
                    this.model[name] = value;
                    console.log('funck');
                    return this;
                }),
            get: jest.genMockFunction().mockImplementation(function (key) {
                return this.model[key];
            }),
            validate: jest.genMockFunction()

        };
    });

    describe('Select.render', function () {

        it('it should render the correct markup', function () {

            expect(React.renderToStaticMarkup(
                React.createElement(Select, {
                    name: "sony", model: model, options: [
                        {label: 'Option 1', value: 1},
                        {label: 'Option 2', value: 2}]
                }))).toBe(
                '<select name="sony" class="form-control">' +
                '<option value="1">Option 1</option>' +
                '<option value="2">Option 2</option></select>');


        });

        //@TODO: research, it seems that React sets the selected property
        // through javascript, as a result the rendered markup does not have
        // the selected arrtibute. See http://facebook.github.io/react/docs/forms.html#why-select-value
        it('it should render the correct markup with defaults', function () {

            expect(React.renderToStaticMarkup(
                React.createElement(Select, {
                    name: "sony", model: model, options: [
                        {label: 'Option 1', value: 1},
                        {label: 'Option 2', value: 2}
                    ], defaultValue: 2
                }))).toBe(
                '<select name="sony" class="form-control">' +
                '<option value="1">Option 1</option>' +
                '<option value="2">Option 2</option></select>');


        });
    });

    describe('Select.change', function () {

        it('should call the model\'s set()', function () {

            var model = {model:{}, get(key){return this.model[key];},set:function(key, value) {this.model[key]=value; return this}};

            var select = Test.renderIntoDocument(
                React.createElement(Select, {
                    name: "sony",
                    model: model,
                    options: [
                        {label: 'Option 1', value: 1},
                        {label: 'Option 2', value: 2}]
                }));

            var node = Test.findRenderedDOMComponentWithTag(select, 'select');
            Test.Simulate.change(node, {target: {value: 'Option 2', name: node.getDOMNode().name}});

            expect(model.model.sony).toBe('Option 2');

        });


    });


});
