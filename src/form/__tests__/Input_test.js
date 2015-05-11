import React from 'react/addons';

import Input from '../Input';

var Test = React.addons.TestUtils;

describe('Input', function () {

    describe('Input.render', function () {

        it('it should render the correct markup', function () {

            expect(React.renderToStaticMarkup(<Input name="name" type="text"/>)).toBe(
                '<input class="form-control" id="name" type="text" name="name">');

        });

        it('it should render the correct markup with defaults', function () {

            expect(React.renderToStaticMarkup(<Input name="name" type="text"
                                                     defaultValue="Some value"/>)).toBe(
                '<input class="form-control" id="name" type="text" name="name" value="Some value">');

        });
    });

    describe('Input.change', function () {

        it('should call the handler\'s valueChanged() when the value of the field changes', function () {

            var input;

            var mock = {

                valueChanged: jest.genMockFunction().mockImplementation(
                    function (name, value, control, target) {
                        expect(target.name).toBe(name);
                        expect(value).toBe('myInput');
                        expect(control).toBe(input);
                    })
            };

            input = Test.renderIntoDocument(
                <Input handler={mock} name="myInput"/>);


            var node = Test.findRenderedDOMComponentWithTag(input, 'input');


            Test.Simulate.change(node, {target: {value: 'myInput', name: node.getDOMNode().name}});
            expect(mock.valueChanged).toBeCalled();


        });


    });

    describe('Input.blur', function () {

        it('should call the handler\'s focusLost() when it losses focus', function () {

            var input;

            var mock = {

                focusLost: jest.genMockFunction().mockImplementation(
                    function (name, value, control, target) {
                        expect(target.name).toBe(name);
                        expect(value).toBe('myInput');
                        expect(control).toBe(input);
                    })
            };

            input = Test.renderIntoDocument(
                <Input handler={mock} name="myInput"/>);


            var node = Test.findRenderedDOMComponentWithTag(input, 'input');


            Test.Simulate.blur(node, {target: {value: 'myInput', name: node.getDOMNode().name}});
            expect(mock.focusLost).toBeCalled();


        });


    });

});
