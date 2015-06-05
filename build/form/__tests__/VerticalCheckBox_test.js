'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _VerticalCheckBox = require('../VerticalCheckBox');

var _VerticalCheckBox2 = _interopRequireDefault(_VerticalCheckBox);

var _Model = require('./Model');

var _Model2 = _interopRequireDefault(_Model);

var Test = _reactAddons2['default'].addons.TestUtils;

describe('VerticalCheckBox', function () {

    describe('VerticalCheckBox.render', function () {

        it('it should render the correct markup', function () {

            expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_VerticalCheckBox2['default'], { name: 'name', model: _Model2['default'], labelValue: 'Label Value' }))).toBe('<div class="form-group">' + '<div class="checkbox">' + '<label><input name="name" class="" type="checkbox">Label Value</label>' + '</div></div>');
        });
    });
});