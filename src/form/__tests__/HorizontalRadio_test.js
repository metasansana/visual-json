import React from 'react/addons';
import HorizontalRadio from '../HorizontalRadio';
import Model from './Model';

var Test = React.addons.TestUtils;

describe('Radio', function () {

    describe('Radio.render', function () {

        it('it should render the correct markup', function () {

            expect(React.renderToStaticMarkup(
                React.createElement(HorizontalRadio, {
                        name: "sony",
                        labelValue:'Das Radio',
                        model: Model,
                        options: [
                            {label: 'Option 1', value: 1},
                            {label: 'Option 2', value: 2}
                        ]
                    }
                ))).toBe(
                '<div class="form-group">'+
                    '<label class="col-md-4">Das Radio</label>'+
                '<div class="col-md-8">'+
                '<div class="radio"><label><input name="sony" value="1" type="radio" class="">Option 1</label></div>'+
                '<div class="radio"><label><input name="sony" value="2" type="radio" class="">Option 2</label></div>'+
                '</div></div>');



        });


    });


});
