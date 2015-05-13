'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

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

    describe('Input.render', function () {

        it('it should render the correct markup', function () {

            expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_Input2['default'], { name: 'name', type: 'text', model: model }))).toBe('<input name="name" class="form-control" type="text">');
        });

        it('it should render the correct markup with defaults', function () {

            expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_Input2['default'], {
                name: 'name',
                type: 'text',
                model: model,
                defaultValue: 'Some value'
            }))).toBe('<input name="name" class="form-control" type="text" value="Some value">');
        });
    });

    describe('Input.change', function () {

        it('should call the model\'s set() when a changed', function () {

            var input;

            var model = { model: {}, get: function get(key) {
                    return this.model[key];
                }, set: function set(key, value) {
                    this.model[key] = value;return this;
                } };

            input = Test.renderIntoDocument(_reactAddons2['default'].createElement(_Input2['default'], { model: model, name: 'myInput', type: 'text' }));

            var node = Test.findRenderedDOMComponentWithTag(input, 'input');

            Test.Simulate.change(node, { target: { value: 'myInput', name: node.getDOMNode().name } });
            expect(model.model.myInput).toBe('myInput');
        });
    });

    describe('Input.blur', function () {

        xit('should call the handler\'s validate() when it losses focus', function () {

            var input;

            input = Test.renderIntoDocument(_reactAddons2['default'].createElement(_Input2['default'], { handler: model, name: 'myInput' }));

            var node = Test.findRenderedDOMComponentWithTag(input, 'input');

            Test.Simulate.blur(node, { target: { value: 'myInput', name: node.getDOMNode().name } });
            expect(model.focusLost).toBeCalled();
        });
    });
});