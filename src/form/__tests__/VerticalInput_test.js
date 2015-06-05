import React from 'react/addons';
import VerticalInput from '../VerticalInput';
import Model from './Model';

var Test = React.addons.TestUtils;


describe('HorizontalInput', function () {

    describe('HorizontalInput.render', function () {

        it('it should render the correct markup', function () {
            expect(React.renderToStaticMarkup(
                React.createElement(VerticalInput,
                    {
                        name: "name",
                        type: "text",
                        labelValue:"Name",
                        model:Model}))).
                toBe('<div class="form-group"><label>Name</label><input name="name" type="text" class="form-control"></div>');

        });

    });

});
