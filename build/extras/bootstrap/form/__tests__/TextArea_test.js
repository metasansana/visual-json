'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _TextArea = require('../TextArea');

var _TextArea2 = _interopRequireDefault(_TextArea);

var _HorizontalTextArea = require('../HorizontalTextArea');

var _HorizontalTextArea2 = _interopRequireDefault(_HorizontalTextArea);

var _VerticalTextArea = require('../VerticalTextArea');

var _VerticalTextArea2 = _interopRequireDefault(_VerticalTextArea);

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
    node = Test.findRenderedDOMComponentWithTag(ele, 'textarea');
    Test.Simulate.change(node, { target: { name: node.getDOMNode().name } });
    expect(set.mock.calls.length).toEqual(1);
};

beforeEach(function () {
    set = jest.genMockFunction();
});

describe('Textarea', function () {

    beforeEach(function () {
        Component = _TextArea2['default'];
        correctMarkup = '<textarea name="name" class="form-control" type="textarea">\n</textarea>';
        correctMarkupWithDefaults = '<textarea name="defaults" type="textarea" class="form-control">\nyes</textarea>';
    });

    describe('Textarea#render', function () {

        it('it should render the correct markup', function ($) {
            return testCorrectMarkup({ name: 'name', set: set });
        });

        it('it should render the correct markup with defaults', function ($) {
            return testCorrectMarkupWithDefaults({
                name: 'defaults',
                type: 'textarea',
                set: set,
                value: 'yes'
            });
        });
    });

    describe('Textarea events', function ($) {
        return it('should call `set` onChange', function ($) {
            return testChange({ name: 'name', set: set });
        });
    });
});

describe('HorizontalTextarea', function () {

    beforeEach(function () {
        Component = _HorizontalTextArea2['default'];
        correctMarkup = '<div class="form-group"><label class="col-md-4">Name</label><div class="col-md-8"><textarea name="name" class="form-control" type="textarea">\n</textarea></div></div>';
        correctMarkupWithDefaults = '<div class="form-group"><label class="col-md-4">Defaults</label><div class="col-md-8"><textarea name="defaults" type="textarea" class="form-control">\nyes</textarea></div></div>';
    });

    describe('HorizontalTextarea#render', function () {

        it('it should render the correct markup', function ($) {
            return testCorrectMarkup({ name: 'name', 'set': set, labelValue: 'Name' });
        });

        it('it should render the correct markup with defaults', function ($) {
            return testCorrectMarkupWithDefaults({
                name: 'defaults',
                type: 'textarea',
                set: set,
                labelValue: 'Defaults',
                value: 'yes'
            });
        });
    });
});

describe('VerticalTextarea', function () {

    beforeEach(function () {
        Component = _VerticalTextArea2['default'];
        correctMarkup = '<div class="form-group"><label>Name</label><textarea name="name" class="form-control" type="textarea">\n</textarea></div>';
        correctMarkupWithDefaults = '<div class="form-group"><label>Defaults</label><textarea name="defaults" type="textarea" class="form-control">\nyes</textarea></div>';
    });

    describe('VerticalTextarea#render', function () {

        it('it should render the correct markup', function ($) {
            return testCorrectMarkup({ name: 'name', 'set': set, labelValue: 'Name' });
        });

        it('it should render the correct markup with defaults', function ($) {
            return testCorrectMarkupWithDefaults({
                name: 'defaults',
                type: 'textarea',
                set: set,
                labelValue: 'Defaults',
                value: 'yes'
            });
        });
    });
});