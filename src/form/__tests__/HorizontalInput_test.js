import React from 'react/addons';
import HorizontalInput from '../HorizontalInput';
import Model from './Model';

var Test = React.addons.TestUtils;


describe('HorizontalInput', function () {

    describe('HorizontalInput.render', function () {

        it('it should render the correct markup', function () {
            expect(React.renderToStaticMarkup(
                React.createElement(HorizontalInput,
                    {
                        name: "name",
                        type: "text",
                        labelValue:"Name",
                        model:Model}))).
                toBe('<div class="form-group "><label class="col-md-4">Name</label><div class="col-md-8"><input name="name" type="text" class="form-control"></div></div>');

        });

    });

});
