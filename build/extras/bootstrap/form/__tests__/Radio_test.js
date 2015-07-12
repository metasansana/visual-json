'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _Radio = require('../Radio');

var _Radio2 = _interopRequireDefault(_Radio);

var _StackedRadio = require('../StackedRadio');

var _StackedRadio2 = _interopRequireDefault(_StackedRadio);

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

describe('Radio', function () {

    beforeEach(function () {
        Component = _Radio2['default'];
        correctMarkup = '<label><input name="name" type="radio">A Box</label>';
        correctMarkupWithDefaults = '<label><input name="selected" type="radio"></label>';
    });

    describe('Radio#render', function () {

        it('it should render the correct markup', testCorrectMarkup({ name: 'name', set: set }, 'A Box'));
        it('it should render the correct markup with defaults', testCorrectMarkupWithDefaults({
            name: 'selected',
            type: 'radio',
            set: set,
            checked: false
        }, null));
    });

    describe('Radio events', function () {
        it('should call `set` onChange', testChange);
    });
});

describe('StackedRadio', function () {

    beforeEach(function () {
        Component = _StackedRadio2['default'];
        correctMarkup = '<div class="radio"><label><input name="name" type="radio">A Box</label></div>';
        correctMarkupWithDefaults = '<div class="radio"><label><input name="selected" type="radio"></label></div>';
    });

    describe('StackedRadio#render', function () {

        it('it should render the correct markup', testCorrectMarkup({ name: 'name', set: set }, 'A Box'));
        it('it should render the correct markup with defaults', testCorrectMarkupWithDefaults({
            name: 'selected',
            type: 'radio',
            set: set,
            checked: false
        }, null));
    });
});