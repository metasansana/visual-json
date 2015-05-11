import React from 'react/addons';

import Select from '../Select';

var Test = React.addons.TestUtils;

describe('Select', function () {

    describe('Select.render', function () {

        it('it should render the correct markup', function () {

            expect(React.renderToStaticMarkup(<Select name="sony" handler={{}} options={[
                {label: 'Option 1', value: 1},
                {label: 'Option 2', value: 2}
            ]}/>)).toBe(
                '<select class="form-control">'+
                '<option value="1">Option 1</option>'+
                '<option value="2">Option 2</option></select>');


        });

        //@TODO: research, it seems that React sets the selected property
        // through javascript, as a result the rendered markup does not have
        // the selected arrtibute. See http://facebook.github.io/react/docs/forms.html#why-select-value
        xit('it should render the correct markup with defaults', function () {

            expect(React.renderToStaticMarkup(<Select name="sony" handler={{}} options={[
                {label: 'Option 1', value: 1},
                {label: 'Option 2', value: 2}
            ]} defaultValue={2}/>)).toBe(
                '<select class="form-control">'+
                '<option value="1">Option 1</option>'+
                '<option value="2" selected>Option 2</option></select>');


        });
    });

    describe('Select.change', function () {

        it('should call the handler\'s valueChanged when the value changes', function () {

            var select;
            var node;

            var mock = {

                valueChanged: jest.genMockFunction().mockImplementation(
                    function (name, value, control, target) {
                        expect(target.name).toBe(name);
                        expect(value).toBe(target.value);
                        expect(control).toBe(select);
                    })
            };

            select = Test.renderIntoDocument(
                <Select name="name" handler={mock} options={[
                    {label: 'Option 1', value: 1},
                    {label: 'Option 2', value: 2}]}/>);

            var node = Test.findRenderedDOMComponentWithTag(select, 'select');


            Test.Simulate.change(node, {target: {value: 'Option 2', name: node.getDOMNode().name}});
            expect(mock.valueChanged).toBeCalled();

        });


    });


});
