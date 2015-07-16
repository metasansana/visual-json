'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var _HorizontalInput = require('../HorizontalInput');

var _HorizontalInput2 = _interopRequireDefault(_HorizontalInput);

var _VerticalInput = require('../VerticalInput');

var _VerticalInput2 = _interopRequireDefault(_VerticalInput);

var Test = _reactAddons2['default'].addons.TestUtils;
var set;
var ele;
var calls;
var node;
var control;
var Component;
var correctMarkup;
var correctMarkupWithDefaults;

var testCorrectMarkup = function testCorrectMarkup(props, childs) {
    expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(Component, props, childs || null))).toBe(correctMarkup);
};

var testCorrectMarkupWithDefaults = function testCorrectMarkupWithDefaults(props, childs) {

    expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(Component, props, childs || null))).toBe(correctMarkupWithDefaults);
};

var testChange = function testChange(props, childs) {

    ele = Test.renderIntoDocument(_reactAddons2['default'].createElement(Component, props, childs));
    node = Test.findRenderedDOMComponentWithTag(ele, 'input');
    Test.Simulate.change(node, { target: { name: node.getDOMNode().name } });
    expect(set.mock.calls.length).toEqual(1);
};

beforeEach(function () {
    set = jest.genMockFunction();
});

describe('Input', function () {

    beforeEach(function () {
        Component = _Input2['default'];
        correctMarkup = '<input name="name" class="form-control" type="text">';
        correctMarkupWithDefaults = '<input name="defaults" type="text" value="yes" class="form-control">';
    });

    describe('Input#render', function () {

        it('it should render the correct markup', function ($) {
            return testCorrectMarkup({ name: 'name', set: set });
        });

        it('it should render the correct markup with defaults', function ($) {
            return testCorrectMarkupWithDefaults({
                name: 'defaults',
                type: 'input',
                set: set,
                value: 'yes'
            });
        });
    });

    describe('Input events', function ($) {
        return it('should call `set` onChange', function ($) {
            return testChange({ name: 'name', set: set });
        });
    });
});

describe('HorizontalInput', function () {

    beforeEach(function () {
        Component = _HorizontalInput2['default'];
        correctMarkup = '<div class="form-group"><label class="col-md-4">Name</label><div class="col-md-8"><input name="name" class="form-control" type="text"></div></div>';
        correctMarkupWithDefaults = '<div class="form-group"><label class="col-md-4">Defaults</label><div class="col-md-8"><input name="defaults" type="text" value="yes" class="form-control"></div></div>';
    });

    describe('HorizontalInput#render', function () {

        it('it should render the correct markup', function ($) {
            return testCorrectMarkup({ name: 'name', 'set': set, labelValue: 'Name' });
        });

        it('it should render the correct markup with defaults', function ($) {
            return testCorrectMarkupWithDefaults({
                name: 'defaults',
                type: 'input',
                set: set,
                labelValue: 'Defaults',
                value: 'yes'
            });
        });
    });
});

describe('VerticalInput', function () {

    beforeEach(function () {
        Component = _VerticalInput2['default'];
        correctMarkup = '<div class="form-group"><label>Name</label><input name="name" class="form-control" type="text"></div>';
        correctMarkupWithDefaults = '<div class="form-group"><label>Defaults</label><input name="defaults" type="text" value="yes" class="form-control"></div>';
    });

    describe('VerticalInput#render', function () {

        it('it should render the correct markup', function ($) {
            return testCorrectMarkup({ name: 'name', 'set': set, labelValue: 'Name' });
        });

        it('it should render the correct markup with defaults', function ($) {
            return testCorrectMarkupWithDefaults({
                name: 'defaults',
                type: 'input',
                set: set,
                labelValue: 'Defaults',
                value: 'yes'
            });
        });
    });
});