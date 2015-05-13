'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _Panel = require('../Panel');

var _Panel2 = _interopRequireDefault(_Panel);

jest.autoMockOff();
jest.dontMock();

describe('Panel', function () {

    it('it should render the correct markup', function () {

        var expected = '<div class="panel panel-warning">' + '<div class="panel-heading">A Panel</div>' + '<div class="panel-body">Internal Content</div></div>';

        var markup = _reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(
            _Panel2['default'],
            { heading: 'A Panel',
                className: 'panel-warning' },
            'Internal Content'
        ));
        expect(markup).toBe(expected);
    });
});