jest.autoMockOff();
jest.dontMock();

import React from 'react/addons';
import Panel from '../Panel';

describe('Panel', function () {

    it('it should render the correct markup', function () {

        var expected =
            '<div class="panel panel-warning">'+
            '<div class="panel-heading">A Panel</div>'+
            '<div class="panel-body">Internal Content</div></div>';

        var markup = React.renderToStaticMarkup(<Panel heading="A Panel"
                                                       className="panel-warning">Internal Content</Panel>);
        expect(markup).toBe(expected);
    });

});
