import Compiler from '../Compiler';
import React from 'react/addons';

var compiler;
var ctx;


describe('Compiler', function () {

    beforeEach(function () {

        compiler = new Compiler({
            form: function (schema) {
                return React.createElement('form', {}, schema.controls);
            },
            input: function (schema) {
                return React.createElement('div', {}, React.createElement('input', schema));
            }
        });
        ctx = {
            aProp: 26,
            getAProp: function () {

                return this.aProp
            },
            getAValue:function(value){
                return value;
            }
        }
    });

    describe('Compiler.swapSymbol', function () {

        it('should work', function () {

            var schema = {'@swapped': 'aProp'};
            compiler.swapSymbol('@swapped', schema, ctx);
            expect(schema.swapped).toBe(26);

        });

    });

    describe('Compiler.swapAndBindSymbol', function () {

        it('should work', function () {

            var schema = {'@@swapped': 'getAProp'};
            compiler.callAndSwapSymbol('@@swapped', schema, ctx);
            expect(schema.swapped).toBe(26);

        });

        it('should work with arguments', function () {

            var schema = {'@@swapped': 'getAValue,duke'};
            compiler.callAndSwapSymbol('@@swapped', schema, ctx);
            expect(schema.swapped).toBe('duke');

        });


    });

    describe('Compiler.filter()', function () {

        xit('it should call all filters', function () {

            var p = new Processor({}, MockFilter, {});
            expect(p.filter('two', 'one 1 | two | three three,four,five ', {}))
                .toBe('[one,two,three]');


        });


    });

    describe('Compiler.compile()', function () {

        it('should not mess up the component', function () {

            var c = compiler.compile({"type": "form", controls: compiler.compile({"type": "input"})});
            expect(React.renderToStaticMarkup(c)).toBe('<form><div><input type="input"></div></form>');


        });


    });

});
