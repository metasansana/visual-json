'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _VerticalInput = require('../VerticalInput');

var _VerticalInput2 = _interopRequireDefault(_VerticalInput);

var _Model = require('./Model');

var _Model2 = _interopRequireDefault(_Model);

var Test = _reactAddons2['default'].addons.TestUtils;

describe('HorizontalInput', function () {

    describe('HorizontalInput.render', function () {

        it('it should render the correct markup', function () {
            expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_VerticalInput2['default'], {
                name: 'name',
                type: 'text',
                labelValue: 'Name',
                model: _Model2['default'] }))).toBe('<div class="form-group"><label>Name</label><input name="name" type="text" class="form-control"></div>');
        });
    });
});