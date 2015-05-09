import React from 'react/addons';
import AnyRange from '../AnyRange';

import FormHandler from '../FormHandler';

var mock;
var range;
var node;

var Test = React.addons.TestUtils;

beforeEach(function () {

    mock = function () {
        return {
            valueChanged: jest.genMockFunction(),
            focusReceived: jest.genMockFunction(),
            focusLost: jest.genMockFunction(),
            clicked: jest.genMockFunction()
        };
    }()


});

describe('AnyRange', function () {

    describe('AnyRange.render', function () {

        it('it should render the correct markup', function () {

            var expected =
                '<span>' +
                '<div class="col-md-6"><input name="range.lower" class="form-control" type="date"></div>' +
                '<div class="col-md-6"><input name="range.upper" class="form-control" type="date"></div>' +
                '</span>';

            var markup = React.renderToStaticMarkup(
                <AnyRange handler={mock}
                       lower={{name:'range.lower', type:'date', size:6}}
                       upper={{name:'range.upper', type:'date', size:6}}
                    />);

            expect(markup).toBe(expected);
        });

        it('it should render the correct markup with defaults', function () {

            var expected =
                '<span>' +
                '<div class="col-md-4"><input name="range.lower" class="form-control" type="date" value="The Lower AnyRange"></div>' +
                '<div class="col-md-4"><input name="range.upper" class="form-control" type="date" value="The Upper AnyRange"></div>' +
                '</span>';

            var markup = React.renderToStaticMarkup(
                <AnyRange handler={mock}
                       lower={{name:'range.lower', type:'date'}}
                       upper={{name:'range.upper', type:'date'}}
                       defaultValue={{range:{lower:'The Lower AnyRange', upper:'The Upper AnyRange'}}}
                    />);

            expect(markup).toBe(expected);
        });

        //@TODO sort this out so dot notation can be used both ways
        xit('it should render the correct markup with dot notation defaults', function () {

            var expected =
                '<span>' +
                '<div class="col-md-4"><input name="range.lower" class="form-control" type="date" value="The Lower AnyRange"></div>' +
                '<div class="col-md-4"><input name="range.upper" class="form-control" type="date" value="The Upper AnyRange"></div>' +
                '</span>';

            var markup = React.renderToStaticMarkup(
                <AnyRange handler={mock}
                       lower={{name:'range.lower', type:'date'}}
                       upper={{name:'range.upper', type:'date'}}
                       defaultValue={{'range.lower':'The Lower AnyRange', 'range.upper':'The Upper AnyRange'}}
                    />);

            expect(markup).toBe(expected);
        });


    });

    describe('AnyRange.blur', function () {

        it('should call the handler\'s focusLost() when lower or upper losses focus', function () {

            mock = {

                focusLost: jest.genMockFunction().mockImplementation(
                    function (name, value, control, target) {

                        expect(target.name).toBe(name);
                        expect(value).toBe(name);
                        expect(control).toBe(range);
                    })
            };

            range = Test.renderIntoDocument(
                <AnyRange handler={mock}
                       lower={{name:'range.lower', type:'date'}}
                       upper={{name:'range.upper', type:'date'}}/>);

            var inputs = Test.scryRenderedDOMComponentsWithTag(range, 'input');

            node = inputs[0];
            Test.Simulate.blur(node, {target: {value: 'range.lower', name:node.getDOMNode().name}});
            expect(mock.focusLost).toBeCalled();

            mock.focusLost.mockClear();

            node = inputs[1];
            Test.Simulate.blur(node, {target: {value: 'range.upper', name:node.getDOMNode().name}});
            expect(mock.focusLost).toBeCalled();

        });



    });
});




