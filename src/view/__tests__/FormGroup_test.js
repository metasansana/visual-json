import React from 'react/addons';
import FormGroup from '../FormGroup';


class FakeComponent extends React.Component {

    render() {
        return (<input value="#C39212" readOnly/>);
    }
}

describe('FormGroup', function () {

    it('it should render with control wrappers', function () {

        var fakeInstance = React.createElement(FakeComponent);
        var expected =
            '<div class="form-group"><label class="control-label col-md-2">Xyz</label>'+
            '<div class="col-md-5"><input value="#C39212" readonly></div>'+
            '<div class="col-md-5"><input value="#C39212" readonly></div></div>';

        var markup = React.renderToStaticMarkup(<FormGroup
            label={ {value:'Xyz', className:'col-md-2'} }
            controls={[
           {wrapClass: 'col-md-5', control:fakeInstance},
           {wrapClass: 'col-md-5', control:fakeInstance}
           ]}/>);


        expect(markup).toBe(expected);
    });

    xit('it should render without control wrappers', function () {

        var fakeInstance = React.createElement(FakeComponent);
        var expected =
            '<div class="form-group"><label class="control-label col-md-2">Xyz</label>'+
            '<input value="#C39212" readonly><input value="#C39212" readonly></div>';

        var markup = React.renderToStaticMarkup(<FormGroup
            label={ {value:'Xyz', className:'col-md-2'} }
            controls={[
           {control:fakeInstance},
           {control:fakeInstance}
           ]}/>);


        expect(markup).toBe(expected);
    });

});
