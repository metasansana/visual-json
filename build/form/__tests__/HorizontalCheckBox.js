'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _CheckBox = require('../CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var Test = _reactAddons2['default'].addons.TestUtils;
var model;

describe('Input', function () {

    beforeEach(function () {

        model = {
            model: {},

            set: jest.genMockFunction().mockImplementation(function (name, value, control, target) {
                this.model[name] = value;
                return this;
            }),
            get: jest.genMockFunction(),
            validate: jest.genMockFunction()

        };
    });

    describe('HorizontalCheckBox.render', function () {

        it('it should render the correct markup', function () {

            expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_CheckBox2['default'], { name: 'name', model: model }))).toBe('<input name="name" class="form-control" type="text">');
        });

        xit('it should render the correct markup with defaults', function () {

            expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_CheckBox2['default'], {
                name: 'name',
                type: 'text',
                model: model,
                defaultValue: 'Some value'
            }))).toBe('<input name="name" class="form-control" type="text" value="Some value">');
        });
    });
});