import React from 'react/addons';

import Radio from '../Radio';

var Test = React.addons.TestUtils;

describe('Radio', function () {

    describe('Radio.render', function () {

        it('it should render the correct markup', function () {

            expect(React.renderToStaticMarkup(<Radio name="sony" handler={{}} options={[
                {label: 'Option 1', value: 1},
                {label: 'Option 2', value: 2}
            ]}/>)).toBe(
                '<span><div class="radio"><label class="radio-inline control-label">'+
                      '<input name="sony" value="1" type="radio">Option 1</label>'+
                '</div><div class="radio"><label class="radio-inline control-label">'+
                '<input name="sony" value="2" type="radio">Option 2</label>'+
                '</div></span>');


        });

        it('it should render the correct markup with defaults', function () {

            expect(React.renderToStaticMarkup(<Radio name="sony" handler={{}} options={[
                {label: 'Option 1', value: 1},
                {label: 'Option 2', value: 2}
            ]} defaultValue={2}/>)).toBe(
                '<span><div class="radio"><label class="radio-inline control-label">'+
                '<input name="sony" value="1" type="radio">Option 1</label>'+
                '</div><div class="radio"><label class="radio-inline control-label">'+
                '<input name="sony" value="2" type="radio" selected>Option 2</label>'+
                '</div></span>');


        });
    });

    describe('Radio.change', function () {

        it('should call the handler\'s valueChanged when the value changes', function () {

            var radio;
            var node;

            var mock = {

                valueChanged: jest.genMockFunction().mockImplementation(
                    function (name, value, control, target) {
                        expect(target.name).toBe(name);
                        expect(value).toBe(target.value);
                        expect(control).toBe(range);
                    })
            };

            range = Test.renderIntoDocument(
                <Radio name="name" handler={mock} options={[
                    {label: 'Option 1', value: 1},
                    {label: 'Option 2', value: 2}]}/>);

            var inputs = Test.scryRenderedDOMComponentsWithTag(range, 'input');

            node = inputs[0];
            Test.Simulate.change(node, {target: {value: node.getDOMNode().value, name: node.getDOMNode().name}});
            expect(mock.valueChanged).toBeCalled();

            mock.valueChanged.mockClear();

            node = inputs[1];
            Test.Simulate.change(node, {target: {value: node.getDOMNode().value, name: node.getDOMNode().name}});
            expect(mock.valueChanged).toBeCalled();

        });


    });


});
