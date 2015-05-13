'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _Parser = require('../Parser');

var _Parser2 = _interopRequireDefault(_Parser);

var Test = _reactAddons2['default'].addons.TestUtils;
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
        parser = new _Parser2['default']({}, MockFilter, {});
    });

    describe('Parser.parseFilters()', function () {

        xit('it should call all filters', function () {

            expect(parser.parseFilters('two', {
                value: 'one 1 | two | three three,four,five ',
                context: {}
            })).toBe('[one,two,three]');
        });
    });

    describe('Parser.parse()', function () {

        it('should not explode', function () {

            var spec = {
                type: 'form',
                controls: [{ swap: 1 }, { bind: 2 }, { compile: 3 }, { nested: { compile: 4 } }, { avoid: true }]
            };

            var func = function func() {};

            var ctx = {};

            var compiler = {
                swapSymbol: jest.genMockFn().mockImplementation(function (key, schema) {
                    if (key === 'swap') schema.swap = true;

                    return schema;
                }),
                callAndSwapSymbol: jest.genMockFn().mockImplementation(function (key, schema) {

                    if (key === 'bind') schema.bind = func;

                    return schema;
                }),
                eagerCompile: jest.genMockFn().mockImplementation(function (key, schema) {

                    if (key === 'compile') schema.compile = {};
                    return schema;
                }),
                eagerCompileArray: jest.genMockFn().mockImplementation(function (key, schema) {

                    if (key === 'nested') schema.nested.compile = {};
                    return schema;
                }),
                compile: jest.genMockFn().mockImplementation(function (schema) {

                    return schema;
                })
            };

            var result = parser.parse(spec, ctx, compiler);

            expect(result).toEqual({
                type: 'form',
                controls: [{
                    swap: true
                }, {
                    bind: func

                }, {
                    compile: {}
                }, {
                    nested: {
                        compile: {}
                    }
                }, { avoid: true }]
            });
        });
    });
});