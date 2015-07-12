'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _VerticalTextArea = require('../VerticalTextArea');

var _VerticalTextArea2 = _interopRequireDefault(_VerticalTextArea);

var _Model = require('./Model');

var _Model2 = _interopRequireDefault(_Model);

var Test = _reactAddons2['default'].addons.TestUtils;

describe('VerticalTextArea', function () {

    describe('VerticalTextArea.render', function () {

        it('it should render the correct markup', function () {

            expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_VerticalTextArea2['default'], {
                name: 'name',
                labelValue: 'Name',
                model: _Model2['default'] })).replace(/\n/g, '')).toBe('<div class="form-group "><label>Name</label><textarea name="name" class="form-control"></textarea></div>'.replace(/\n/g, ''));
        });
    });
});