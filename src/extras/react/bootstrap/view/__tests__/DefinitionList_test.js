
import React from 'react/addons';
import DefinitionList from '../DefinitionList';

describe('DefintionList', function () {

    it('it should render the correct markup', function () {

        var expected =
            `<dl class="dl-horizontal"><dt>Package</dt><dd>C75</dd><dt>Plan</dt><dd>C40</dd></dl>`;

        var markup = React.renderToStaticMarkup(<DefinitionList
            labels={
            [
            {label:'Package', name:'package'},
            {label:'Plan', name:'plans.selected'}
            ]}
            data={
            {package:'C75', plans:{selected:'C40'}}
            }/>);

        expect(markup).toBe(expected);
    });

});
