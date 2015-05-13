'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _TextArea = require('../TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var Test = _reactAddons2['default'].addons.TestUtils;
var model;
describe('TextArea', function () {

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

    describe('TextArea.render', function () {

        it('it should render the correct markup', function () {

            expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_TextArea2['default'], { name: 'name', model: model })).replace(/\n/g, '')).toBe('<textarea name="name" class="form-control"></textarea>'.replace(/\n/g, ''));
        });

        it('it should render the correct markup with defaults', function () {

            expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_TextArea2['default'], { name: 'name', model: model, defaultValue: 'Some Value' })).replace(/\n/g, '')).toBe('<textarea name="name" class="form-control">Some Value</textarea>'.replace(/\n/g, ''));
        });
    });

    describe('TextArea.change', function () {

        it('should call the handler\'s valueChanged() when the value of the field changes', function () {

            var area;
            var model = { model: {}, get: function get(key) {
                    return this.model[key];
                }, set: function set(key, value) {
                    this.model[key] = value;return this;
                } };

            area = Test.renderIntoDocument(_reactAddons2['default'].createElement(_TextArea2['default'], { name: 'name', model: model }));

            var node = Test.findRenderedDOMComponentWithTag(area, 'textarea');

            Test.Simulate.change(node, { target: { value: 'myTextArea', name: node.getDOMNode().name } });
            expect(model.model.name).toBe('myTextArea');
        });
    });
});