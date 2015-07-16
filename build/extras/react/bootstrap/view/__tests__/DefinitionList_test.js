'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _DefinitionList = require('../DefinitionList');

var _DefinitionList2 = _interopRequireDefault(_DefinitionList);

describe('DefintionList', function () {

    it('it should render the correct markup', function () {

        var expected = '<dl class="dl-horizontal"><dt>Package</dt><dd>C75</dd><dt>Plan</dt><dd>C40</dd></dl>';

        var markup = _reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_DefinitionList2['default'], {
            labels: [{ label: 'Package', name: 'package' }, { label: 'Plan', name: 'plans.selected' }],
            data: { 'package': 'C75', plans: { selected: 'C40' } } }));

        expect(markup).toBe(expected);
    });
});