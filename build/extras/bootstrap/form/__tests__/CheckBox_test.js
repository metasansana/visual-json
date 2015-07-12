'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _CheckBox = require('../CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _StackedCheckBox = require('../StackedCheckBox');

var _StackedCheckBox2 = _interopRequireDefault(_StackedCheckBox);

var Test = _reactAddons2['default'].addons.TestUtils;
var set;
var ele;
var node;
var control;
var Component;
var correctMarkup;
var correctMarkupWithDefaults;

var testCorrectMarkup = function testCorrectMarkup(props, childs) {
    return function () {
        expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(Component, props, childs || null))).toBe(correctMarkup);
    };
};

var testCorrectMarkupWithDefaults = function testCorrectMarkupWithDefaults(props, childs) {
    return function () {
        expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(Component, props, childs || null))).toBe(correctMarkupWithDefaults);
    };
};

var testChange = function testChange() {
    ele = Test.renderIntoDocument(_reactAddons2['default'].createElement(Component, { name: 'name', set: set }));
    node = Test.findRenderedDOMComponentWithTag(ele, 'input');
    Test.Simulate.change(node, { target: { name: node.getDOMNode().name } });
    expect(set.mock.calls.length).toEqual(1);
};

beforeEach(function () {
    set = jest.genMockFunction();
});

describe('CheckBox', function () {

    beforeEach(function () {
        Component = _CheckBox2['default'];
        correctMarkup = '<label><input name="name" type="checkbox">A Box</label>';
        correctMarkupWithDefaults = '<label><input name="selected" type="checkbox"></label>';
    });

    describe('CheckBox#render', function () {

        it('it should render the correct markup', testCorrectMarkup({ name: 'name', set: set }, 'A Box'));
        it('it should render the correct markup with defaults', testCorrectMarkupWithDefaults({
            name: 'selected',
            type: 'checkbox',
            set: set,
            checked: false
        }, null));
    });

    describe('CheckBox events', function () {
        it('should call `set` onChange', testChange);
    });
});

describe('StackedCheckBox', function () {

    beforeEach(function () {
        Component = _StackedCheckBox2['default'];
        correctMarkup = '<div class="checkbox"><label><input name="name" type="checkbox">A Box</label></div>';
        correctMarkupWithDefaults = '<div class="checkbox"><label><input name="selected" type="checkbox"></label></div>';
    });

    describe('StackedCheckBox#render', function () {

        it('it should render the correct markup', testCorrectMarkup({ name: 'name', set: set }, 'A Box'));
        it('it should render the correct markup with defaults', testCorrectMarkupWithDefaults({
            name: 'selected',
            type: 'checkbox',
            set: set,
            checked: false
        }, null));
    });
});