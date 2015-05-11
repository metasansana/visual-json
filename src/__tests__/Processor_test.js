import React from 'react/addons';

import Processor from '../Processor';

var Test = React.addons.TestUtils;

var MockFilter = {

    one: jest.genMockFunction().mockImplementation(function (value, arg1, context, next) {

        expect(arg1).toBe('1');
        return next(value);
    }),
    two: jest.genMockFunction().mockImplementation(function (value, context, next) {

        return next('one,' + value + ',three');

    }),
    three: jest.genMockFunction().mockImplementation(function (value, arg1, context, next) {

        expect(arg1).toBe('three,four,five');
        return next('[' + value + ']');

    }),
    stuff: jest.genMockFunction().mockImplementation(function (value, context, next) {
        return next('bits');

    })
}

describe('Processor', function () {

    describe('Processor.filter()', function () {

        it('it should call all filters', function () {

            var p = new Processor({}, MockFilter, {});
            expect(p.filter('two', 'one 1 | two | three three,four,five ', {}))
                .toBe('[one,two,three]');


        });


    });


    describe('Processor.preProcess()', function () {

        it('it should turn any keys prefixed by "$$$" into valid elements', function () {

            var mockTextarea = function (schema) {

                expect(typeof schema.filter).toBe('function');
                schema.defaultValue = schema.defaultValue+' '+schema.filter(schema.defaultValue);
                return React.createElement('input', schema);

            }

            var mockDiv = function (schema) {
                return React.createElement('div',null, schema.content[0]);
            }

            var p = new Processor({div: mockDiv, textarea: mockTextarea},  MockFilter, {});

            var result = p.preProcess({
                $$$content: [
                    {
                        type: 'div',
                        $$$content: [{type: 'textarea', name:'textplace', $$filter:'stuff'}]
                    }]
            }, {textplace:'A place for text'});

            expect(React.renderToStaticMarkup(result.content[0])).toBe(
                '<div><input type="textarea" name="textplace" value="A place for text bits"></div>'
            );


        });


    });


})
;
