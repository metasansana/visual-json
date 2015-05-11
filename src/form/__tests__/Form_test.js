import React from 'react/addons';

import Form from '../Form';

var Test = React.addons.TestUtils;

class Fake extends React.Component {

    render() {
        return (<fake>{this.props.defaultValue}</fake>);
    }
}

describe('Form', function () {

    describe('Form.render', function () {
        it('it should render the correct markup with children', function () {

            expect(React.renderToStaticMarkup(<Form name="name"><input type="datetime"/></Form>)).toBe(
                '<form name="name"><input type="datetime"></form>');

        });

        it('it should render the correct markup with elements', function () {


            var processor = {
                process: function (schema, defaults) {
                    return (<Fake/>)
                }
            }

            expect(React.renderToStaticMarkup(
                <Form name="name" elements={[{type:'fake', name:'one'},{type:'fake', name:'two'}]}
                      processor={processor}/>)).toBe('<form name="name"><fake></fake><fake></fake></form>');

        });
    });


});
