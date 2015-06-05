import React from 'react/addons';
import HorizontalSelect from '../HorizontalSelect.js';
import Model from './Model';

var Test = React.addons.TestUtils;

describe('Select', function () {


    describe('Select.render', function () {

        it('it should render the correct markup', function () {

            expect(React.renderToStaticMarkup(
                React.createElement(HorizontalSelect, {
                    name: "sony",
                    labelValue:'Option',
                    model: Model,
                    options: [
                        {label: 'Option 1', value: 1},
                        {label: 'Option 2', value: 2}]
                }))).toBe(
                '<div class="form-group">'+
                '<label class="col-md-4">Option</label>'+
                '<div class="col-md-8">'+
                '<select name="sony" class="form-control">'+
                '<option value="1">Option 1</option>'+
                '<option value="2">Option 2</option>'+
                '</select></div></div>');


        });
    });

});
