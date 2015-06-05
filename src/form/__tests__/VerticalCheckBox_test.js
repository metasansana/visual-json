import React from 'react/addons';
import VerticalCheckBox from '../VerticalCheckBox';
import Model from './Model';

var Test = React.addons.TestUtils;


describe('VerticalCheckBox', function () {

    describe('VerticalCheckBox.render', function () {

        it('it should render the correct markup', function () {

            expect(React.renderToStaticMarkup(
                React.createElement(VerticalCheckBox, {name: "name", model: Model, labelValue: 'Label Value'}))).
                toBe(
                '<div class="form-group">' +
                '<div class="checkbox">' +
                '<label><input name="name" class="" type="checkbox">Label Value</label>' +
                '</div></div>');

        });

    });


});
