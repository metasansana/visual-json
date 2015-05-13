'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _Select = require('../Select');

var _Select2 = _interopRequireDefault(_Select);

var Test = _reactAddons2['default'].addons.TestUtils;
var model;

describe('Select', function () {

    beforeEach(function () {

        model = {
            model: {},

            set: jest.genMockFunction().mockImplementation(function (name, value, control, target) {
                this.model[name] = value;
                console.log('funck');
                return this;
            }),
            get: jest.genMockFunction().mockImplementation(function (key) {
                return this.model[key];
            }),
            validate: jest.genMockFunction()

        };
    });

    describe('Select.render', function () {

        it('it should render the correct markup', function () {

            expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_Select2['default'], {
                name: 'sony', model: model, options: [{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }]
            }))).toBe('<select name="sony" class="form-control">' + '<option value="1">Option 1</option>' + '<option value="2">Option 2</option></select>');
        });

        //@TODO: research, it seems that React sets the selected property
        // through javascript, as a result the rendered markup does not have
        // the selected arrtibute. See http://facebook.github.io/react/docs/forms.html#why-select-value
        it('it should render the correct markup with defaults', function () {

            expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_Select2['default'], {
                name: 'sony', model: model, options: [{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }], defaultValue: 2
            }))).toBe('<select name="sony" class="form-control">' + '<option value="1">Option 1</option>' + '<option value="2">Option 2</option></select>');
        });
    });

    describe('Select.change', function () {

        it('should call the model\'s set()', function () {

            var model = { model: {}, get: function get(key) {
                    return this.model[key];
                }, set: function set(key, value) {
                    this.model[key] = value;return this;
                } };

            var select = Test.renderIntoDocument(_reactAddons2['default'].createElement(_Select2['default'], {
                name: 'sony',
                model: model,
                options: [{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }]
            }));

            var node = Test.findRenderedDOMComponentWithTag(select, 'select');
            Test.Simulate.change(node, { target: { value: 'Option 2', name: node.getDOMNode().name } });

            expect(model.model.sony).toBe('Option 2');
        });
    });
});