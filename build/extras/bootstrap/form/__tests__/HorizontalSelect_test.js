'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _HorizontalSelectJs = require('../HorizontalSelect.js');

var _HorizontalSelectJs2 = _interopRequireDefault(_HorizontalSelectJs);

var _Model = require('./Model');

var _Model2 = _interopRequireDefault(_Model);

var Test = _reactAddons2['default'].addons.TestUtils;

describe('Select', function () {

    describe('Select.render', function () {

        it('it should render the correct markup', function () {

            expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_HorizontalSelectJs2['default'], {
                name: 'sony',
                labelValue: 'Option',
                model: _Model2['default'],
                options: [{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }]
            }))).toBe('<div class="form-group">' + '<label class="col-md-4">Option</label>' + '<div class="col-md-8">' + '<select name="sony" class="form-control">' + '<option value="1">Option 1</option>' + '<option value="2">Option 2</option>' + '</select></div></div>');
        });
    });
});