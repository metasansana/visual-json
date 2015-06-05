import React from 'react/addons';
import HorizontalCheckBox from '../HorizontalCheckBox';

var Test = React.addons.TestUtils;
var model;

describe('Input', function () {

    beforeEach(function () {

        model =
        {
            model: {},

            set: jest.genMockFunction().mockImplementation(
                function (name, value, control, target) {
                    this.model[name] = value;
                    return this;
                }),
            get: jest.genMockFunction(),
            validate: jest.genMockFunction()

        };
    });

    describe('HorizontalCheckBox.render', function () {

        it('it should render the correct markup', function () {

            expect(React.renderToStaticMarkup(
                React.createElement(HorizontalCheckBox, {name: "name", model: model, offset:'4'}))).
                toBe('<div class="form-group"><div class="col-md-8 col-md-offset-4"><div class="checkbox"><label><input name="name" class="" type="checkbox"></label></div></div></div>');

        });

        xit('it should render the correct markup with defaults', function () {

            expect(React.renderToStaticMarkup(
                React.createElement(HorizontalCheckBox, {
                    name: "name",
                    type: 'text',
                    model: model,
                    defaultValue: "Some value"
                }))).
                toBe('<input name="name" class="form-control" type="text" value="Some value">');

        });
    });





});
