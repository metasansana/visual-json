import React from 'react/addons';

import TextArea from '../TextArea';

var Test = React.addons.TestUtils;
var model;
describe('TextArea', function () {

    beforeEach(function() {
        model =
        {
            model: {},

            set: jest.genMockFunction().mockImplementation(
                function (name, value, control, target) {
                    this.model[name] = value;
                    return this;
                }),
            get: jest.genMockFunction(),
            validate: jest.genMockFunction()

        };
    });

    describe('TextArea.render', function () {

        it('it should render the correct markup', function () {

            expect(React.renderToStaticMarkup(
                React.createElement(TextArea, {name:"name", model:model})).replace(/\n/g, "")).toBe(
                '<textarea name="name" class="form-control"></textarea>'.replace(/\n/g, ""));

        });

        it('it should render the correct markup with defaults', function () {

            expect(React.renderToStaticMarkup(
                React.createElement(TextArea, {name:"name", model:model, defaultValue:'Some Value'})).replace(/\n/g, "")).toBe(
                '<textarea name="name" class="form-control">Some Value</textarea>'.replace(/\n/g, ""));
        });
    });

    describe('TextArea.change', function () {

        it('should call the handler\'s valueChanged() when the value of the field changes', function () {

            var area;
            var model = {model:{}, get(key){return this.model[key];},set:function(key, value) {this.model[key]=value; return this}};

            area = Test.renderIntoDocument(React.createElement(TextArea, {name:"name", model:model}));

            var node = Test.findRenderedDOMComponentWithTag(area, 'textarea');

            Test.Simulate.change(node, {target: {value: 'myTextArea', name: node.getDOMNode().name}});
            expect(model.model.name).toBe('myTextArea');


        });


    });


});
