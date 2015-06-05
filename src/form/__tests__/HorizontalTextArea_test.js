import React from 'react/addons';
import HorizontalTextArea from '../HorizontalTextArea';
import Model from './Model';

var Test = React.addons.TestUtils;

describe('TextArea', function () {


    describe('HorizontalTextArea.render', function () {

        it('it should render the correct markup', function () {

            expect(React.renderToStaticMarkup(
                React.createElement(HorizontalTextArea, {
                    name:"name",
                    labelValue:'Name',
                    model:Model})).replace(/\n/g, "")).toBe(
                '<div class="form-group"><label class="col-md-4">Name</label><div class="col-md-8"><textarea name="name" class="form-control"></textarea></div></div>'.replace(/\n/g, ""));

        });

    });


});
