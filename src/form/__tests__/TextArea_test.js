import React from 'react/addons';

import TextArea from '../TextArea';

var Test = React.addons.TestUtils;

describe('TextArea', function () {

    describe('TextArea.render', function () {

        it('it should render the correct markup', function () {

            expect(React.renderToStaticMarkup(<TextArea name="name"/>).replace(/\s/g, "")).toBe(
                '<textarea class="form-control" id="name" name="name"></textarea>'.replace(/\s/g, ""));

        });

        it('it should render the correct markup with defaults', function () {

            expect(React.renderToStaticMarkup(<TextArea name="name"
                                                        defaultValue="Some value"/>).replace(/\s/g, "")).toBe(
                '<textarea class="form-control" id="name" name="name">Some value</textarea>'.replace(/\s/g, ""));

        });
    });

    describe('TextArea.change', function () {

        it('should call the handler\'s valueChanged() when the value of the field changes', function () {

            var area;

            var mock = {

                valueChanged: jest.genMockFunction().mockImplementation(
                    function (name, value, control, target) {
                        expect(target.name).toBe(name);
                        expect(value).toBe('myTextArea');
                        expect(control).toBe(area);
                    })
            };

            area = Test.renderIntoDocument(
                <TextArea handler={mock} name="myTextArea"/>);


            var node = Test.findRenderedDOMComponentWithTag(area, 'textarea');


            Test.Simulate.change(node, {target: {value: 'myTextArea', name: node.getDOMNode().name}});
            expect(mock.valueChanged).toBeCalled();


        });


    });

    describe('TextArea.blur', function () {

        it('should call the handler\'s focusLost() when it losses focus', function () {

            var area;

            var mock = {

                focusLost: jest.genMockFunction().mockImplementation(
                    function (name, value, control, target) {
                        expect(target.name).toBe(name);
                        expect(value).toBe('myTextArea');
                        expect(control).toBe(area);
                    })
            };

            area = Test.renderIntoDocument(
                <TextArea handler={mock} name="myTextArea"/>);


            var node = Test.findRenderedDOMComponentWithTag(area, 'textarea');


            Test.Simulate.blur(node, {target: {value: 'myTextArea', name: node.getDOMNode().name}});
            expect(mock.focusLost).toBeCalled();


        });


    });

});
