import React from 'react/addons';
import VerticalTextArea from '../VerticalTextArea';
import Model from './Model';

var Test = React.addons.TestUtils;

describe('VerticalTextArea', function () {


    describe('VerticalTextArea.render', function () {

        it('it should render the correct markup', function () {

            expect(React.renderToStaticMarkup(
                React.createElement(VerticalTextArea, {
                    name:"name",
                    labelValue:'Name',
                    model:Model})).replace(/\n/g, "")).toBe(
                '<div class="form-group "><label>Name</label><textarea name="name" class="form-control"></textarea></div>'.replace(/\n/g, ""));

        });

    });


});
