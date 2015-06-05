jest.autoMockOff();

import React from 'react/addons';
import Parser from '../Parser';
import Compiler from '../Compiler';

var Test = React.addons.TestUtils;
var parser;
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
};


describe('Parser', function () {

    beforeEach(function () {
        parser = new Parser(new Compiler({}, MockFilter), {swap: 1});
    });

    xdescribe('Parser.parseFilters()', function () {

        xit('it should call all filters', function () {


            expect(parser.filter('two',
                {
                    value: 'one 1 | two | three three,four,five ',
                    context: {}
                }
            )).toBe('[one,two,three]');

        });


    });

    xdescribe('Parser.parse()', function () {

        it('should not explode', function () {

            var spec = {
                type: 'form',
                controls: [{swap: 1}, {bind: 2}, {compile: 3}, {nested: {compile: 4}}, {avoid: true}]
            };

            var func = function () {
            };

            var ctx = {};

            var compiler = {
                swapSymbol: jest.genMockFn().mockImplementation(function (key, schema) {
                    if (key === 'swap')
                        schema.swap = true;

                    return schema;
                }),
                swapSymbolAndParse: jest.genMockFn().mockImplementation(function (key, schema, ctx, fn) {
                    return schema;
                }),
                swapFilter: jest.genMockFn().mockImplementation(function (key, schema, ctx, fn) {
                    return schema;
                }),
                callAndSwapSymbol: jest.genMockFn().mockImplementation(function (key, schema) {

                    if (key === 'bind')
                        schema.bind = func;

                    return schema;

                }),
                eagerCompile: jest.genMockFn().mockImplementation(function (key, schema) {

                    if (key === 'compile')
                        schema.compile = {};
                    return schema;

                }),
                eagerCompileArray: jest.genMockFn().mockImplementation(function (key, schema) {

                    if (key === 'nested')
                        schema.nested.compile = {};
                    return schema;

                }),
                compile: jest.genMockFn().mockImplementation(function (schema) {

                    return schema;
                })
            };

            var result = parser.parse(spec, ctx, compiler);

            expect(result).toEqual({
                type: 'form',
                controls: [
                    {
                        swap: true
                    }, {
                        bind: func

                    }, {
                        compile: {}
                    }, {
                        nested: {
                            compile: {}
                        }
                    },
                    {avoid: true}
                ]
            })


        });

    });

    describe('Parser.parseObject()', function () {

        it('should work on objects', function () {

            expect(parser.parseObject({"$->params": {"@$in": "swap"}})).toEqual({params: {'$in': 1}});

        });

        it('should work on multi level objects', function () {

            expect(parser.parseObject({"$->params": {"$->institution": {"@$in": "swap"}}})).toEqual(
                {params: {institution: {'$in': 1}}}
            );

        });

        it('should work on arrays', function () {

            expect(parser.parseObject({"$->params": [{"@$in": "swap"}, {"@$in": "swap"}, {"@$in": "swap"}]})).
                toEqual({"params":[{'$in': 1},{'$in': 1},{'$in': 1}]});

        });

    });
})
;

