import React from 'react/addons';

import Radio from '../Radio';

var Test = React.addons.TestUtils;
var model;

describe('Radio', function () {

    beforeEach(function () {

        model =   {
            model: {},

            set: jest.genMockFunction().mockImplementation(
                function (name, value, control, target) {
                    this.model[name] = value;
                    return this;
                }),
            get: jest.genMockFunction().mockImplementation(function(key){
                return this.model[key];
            }),
            validate: jest.genMockFunction()

        };
    });

    describe('Radio.render', function () {

        it('it should render the correct markup', function () {

            expect(React.renderToStaticMarkup(
                React.createElement(Radio, {
                        name: "sony",
                        model: model,
                        options: [
                            {label: 'Option 1', value: 1},
                            {label: 'Option 2', value: 2}
                        ]
                    }
                ))).toBe(
                '<span><div class="radio"><label class="radio-inline control-label">' +
                '<input name="sony" value="1" type="radio">Option 1</label>' +
                '</div><div class="radio"><label class="radio-inline control-label">' +
                '<input name="sony" value="2" type="radio">Option 2</label>' +
                '</div></span>');


        });

        it('it should render the correct markup with defaults', function () {


            expect(React.renderToStaticMarkup(
                React.createElement(Radio, {
                        name: "sony",
                        model: model,
                        defaultValue:2,
                        options: [
                            {label: 'Option 1', value: 1},
                            {label: 'Option 2', value: 2}
                        ]
                    }
                ))).toBe(
                '<span><div class="radio"><label class="radio-inline control-label">' +
                '<input name="sony" value="1" type="radio">Option 1</label>' +
                '</div><div class="radio"><label class="radio-inline control-label">' +
                '<input name="sony" value="2" type="radio" checked>Option 2</label>' +
                '</div></span>');


        });

        it('it should prefer the model over the defaultValue prop', function () {

            model.set('sony', 1);

            expect(React.renderToStaticMarkup(
                React.createElement(Radio, {
                        name: "sony",
                        model: model,
                        defaultValue:2,
                        options: [
                            {label: 'Option 1', value: 1},
                            {label: 'Option 2', value: 2}
                        ]
                    }
                ))).toBe(
                '<span><div class="radio"><label class="radio-inline control-label">' +
                '<input name="sony" value="1" type="radio" checked>Option 1</label>' +
                '</div><div class="radio"><label class="radio-inline control-label">' +
                '<input name="sony" value="2" type="radio">Option 2</label>' +
                '</div></span>');


        });
    });

    describe('Radio.change', function () {

        it('should call the model\'s set when the value changes', function () {

            var radio;
            var node;

            var model = {model:{}, get(key){return this.model[key];},set:function(key, value) {this.model[key]=value; return this}};

            radio = Test.renderIntoDocument(
                React.createElement(Radio, {
                    name: "sony",
                    model: model,
                    options: [
                        {label: 'Option 1', value: 1},
                        {label: 'Option 2', value: 2}
                    ]
                }));

            var inputs = Test.scryRenderedDOMComponentsWithTag(radio, 'input');

            node = inputs[0];
            Test.Simulate.change(node, {target: {value: node.getDOMNode().value, name: node.getDOMNode().name}});
            expect(model.model.sony).toBe('1');


            node = inputs[1];
            Test.Simulate.change(node, {target: {value: node.getDOMNode().value, name: node.getDOMNode().name}});
            expect(model.model.sony).toBe('2');

        });


    });


});
