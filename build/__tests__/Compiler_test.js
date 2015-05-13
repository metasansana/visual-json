'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Compiler = require('../Compiler');

var _Compiler2 = _interopRequireDefault(_Compiler);

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var compiler;
var ctx;

describe('Compiler', function () {

    beforeEach(function () {

        compiler = new _Compiler2['default']({
            form: function form(schema) {
                return _reactAddons2['default'].createElement('form', {}, schema.controls);
            },
            input: function input(schema) {
                return _reactAddons2['default'].createElement('div', {}, _reactAddons2['default'].createElement('input', schema));
            }
        });
        ctx = {
            aProp: 26,
            getAProp: function getAProp() {

                return this.aProp;
            },
            getAValue: function getAValue(value) {
                return value;
            }
        };
    });

    describe('Compiler.swapSymbol', function () {

        it('should work', function () {

            var schema = { '@swapped': 'aProp' };
            compiler.swapSymbol('@swapped', schema, ctx);
            expect(schema.swapped).toBe(26);
        });
    });

    describe('Compiler.swapAndBindSymbol', function () {

        it('should work', function () {

            var schema = { '@@swapped': 'getAProp' };
            compiler.callAndSwapSymbol('@@swapped', schema, ctx);
            expect(schema.swapped).toBe(26);
        });

        it('should work with arguments', function () {

            var schema = { '@@swapped': 'getAValue,duke' };
            compiler.callAndSwapSymbol('@@swapped', schema, ctx);
            expect(schema.swapped).toBe('duke');
        });
    });

    describe('Compiler.filter()', function () {

        xit('it should call all filters', function () {

            var p = new Processor({}, MockFilter, {});
            expect(p.filter('two', 'one 1 | two | three three,four,five ', {})).toBe('[one,two,three]');
        });
    });

    describe('Compiler.compile()', function () {

        it('should not mess up the component', function () {

            var c = compiler.compile({ 'type': 'form', controls: compiler.compile({ 'type': 'input' }) });
            expect(_reactAddons2['default'].renderToStaticMarkup(c)).toBe('<form><div><input type="input"></div></form>');
        });
    });
});