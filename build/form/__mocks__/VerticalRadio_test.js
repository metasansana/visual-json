'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _VerticalRadio = require('../VerticalRadio');

var _VerticalRadio2 = _interopRequireDefault(_VerticalRadio);

var _Model = require('./Model');

var _Model2 = _interopRequireDefault(_Model);

var Test = _reactAddons2['default'].addons.TestUtils;

describe('Radio', function () {

    describe('Radio.render', function () {

        it('it should render the correct markup', function () {

            expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_VerticalRadio2['default'], {
                name: 'sony',
                labelValue: 'Das Radio',
                model: _Model2['default'],
                options: [{ label: 'Option 1', value: 1 }, { label: 'Option 2', value: 2 }]
            }))).toBe('<div class="form-group">' + '<label class="col-md-4">Das Radio</label>' + '<div class="col-md-8">' + '<div class="radio"><label class=""><input name="sony" value="1" type="radio" class="">Option 1</label></div>' + '<div class="radio"><label class=""><input name="sony" value="2" type="radio" class="">Option 2</label></div>' + '</div></div>');
        });
    });
});