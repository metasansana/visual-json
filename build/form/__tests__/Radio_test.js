'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _Radio = require('../Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var Test = _reactAddons2['default'].addons.TestUtils;
var model;

describe('Radio', function () {

    beforeEach(function () {

        model = {
            model: {},

            set: jest.genMockFunction().mockImplementation(function (name, value, control, target) {
                this.model[name] = value;
                return this;
            }),
            get: jest.genMockFunction().mockImplementation(function (key) {
                return this.model[key];
            }),
            validate: jest.genMockFunction()

        };
    });

    xdescribe('Radio.render', function () {

        it('it should render the correct markup', function () {

            expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement('span', null, _reactAddons2['default'].createElement(_Radio2['default'], {
                name: 'sony',
                model: model,
                options: [{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }]
            })))).toBe('<span><div class="radio"><label class="radio-inline control-label">' + '<input name="sony" value="1" type="radio">Option 1</label>' + '</div><div class="radio"><label class="radio-inline control-label">' + '<input name="sony" value="2" type="radio">Option 2</label>' + '</div></span>');
        });

        it('it should render the correct markup with defaults', function () {

            expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement('span', null, _reactAddons2['default'].createElement(_Radio2['default'], {
                name: 'sony',
                model: model,
                defaultValue: 2,
                options: [{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }]
            })))).toBe('<span><div class="radio"><label class="radio-inline control-label">' + '<input name="sony" value="1" type="radio">Option 1</label>' + '</div><div class="radio"><label class="radio-inline control-label">' + '<input name="sony" value="2" type="radio" checked>Option 2</label>' + '</div></span>');
        });

        it('it should prefer the model over the defaultValue prop', function () {

            model.set('sony', 1);

            expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement('span', null, _reactAddons2['default'].createElement(_Radio2['default'], {
                name: 'sony',
                model: model,
                defaultValue: 2,
                options: [{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }]
            })))).toBe('<span><div class="radio"><label class="radio-inline control-label">' + '<input name="sony" value="1" type="radio" checked>Option 1</label>' + '</div><div class="radio"><label class="radio-inline control-label">' + '<input name="sony" value="2" type="radio">Option 2</label>' + '</div></span>');
        });
    });

    xdescribe('Radio.change', function () {

        it('should call the model\'s set when the value changes', function () {

            var radio;
            var node;

            var model = { model: {}, get: function get(key) {
                    return this.model[key];
                }, set: function set(key, value) {
                    this.model[key] = value;return this;
                } };

            radio = Test.renderIntoDocument(_reactAddons2['default'].createElement('span', null, _reactAddons2['default'].createElement(_Radio2['default'], {
                name: 'sony',
                model: model,
                options: [{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }]
            })));

            var inputs = Test.scryRenderedDOMComponentsWithTag(radio, 'input');

            node = inputs[0];
            Test.Simulate.change(node, { target: { value: node.getDOMNode().value, name: node.getDOMNode().name } });
            expect(model.model.sony).toBe('1');

            node = inputs[1];
            Test.Simulate.change(node, { target: { value: node.getDOMNode().value, name: node.getDOMNode().name } });
            expect(model.model.sony).toBe('2');
        });
    });
});