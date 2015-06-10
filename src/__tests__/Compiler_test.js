import Compiler from '../Compiler';
import React from 'react/addons';

var compiler;
var ctx;
var types;


describe('Compiler', function () {

    beforeEach(function () {

        types = {
            form: function (schema) {
            return React.createElement('form', {}, schema.controls);
        },
        input: function (schema) {
            return React.createElement('div', {}, React.createElement('input', schema));
        }};

        ctx = {
            aProp: 26,
            aParseProp:48,
            getAProp: function () {

                return this.aProp
            },
            getAValue:function(value){
                return value;
            }
        };

        compiler = new Compiler(types);

    });

    describe('Compiler.importFromCache()', function() {

        it('should work', function(){

            compiler = new Compiler(types, {}, {target:{'name':'Joe Ens'}});

            expect(compiler.import('!import', {'!import':'target'})).
                toEqual({import:{name:'Joe Ens'}});

        });

    });

    xdescribe('Compiler.swapSymbol', function () {

        it('should work', function () {

            var schema = {'@swapped': 'aProp'};
            compiler.swapSymbol('@swapped', schema, ctx);
            expect(schema.swapped).toBe(26);

        });

    });


    xdescribe('Compiler.swapSymbolAndParse', function () {

        it('should call the passed parse function', function () {

            var result = false;

            var fn = function(schema){
                result = true;
                return schema;
            };

            var schema = {'@@swapped': 'aProp'};
            compiler.swapSymbolAndParse('@@swapped', schema, ctx, fn);
            expect(schema.swapped).toBe(26);
            expect(result).toBe(true);

        });

    });

    xdescribe('Compiler.callAndSwapSymbol', function () {

        it('should work', function () {

            var schema = {'$@swapped': 'getAProp'};
            compiler.callAndSwapSymbol('$@swapped', schema, ctx);
            expect(schema.swapped).toBe(26);

        });

        it('should work with arguments', function () {

            var schema = {'$@swapped': 'getAValue duke'};
            compiler.callAndSwapSymbol('$@swapped', schema, ctx);
            expect(schema.swapped).toBe('duke');

        });


    });

    xdescribe('Compiler.filter()', function () {

        xit('it should call all filters', function () {

            var p = new Processor({}, MockFilter, {});
            expect(p.filter('two', 'one 1 | two | three three,four,five ', {}))
                .toBe('[one,two,three]');


        });


    });

    xdescribe('Compiler.compile()', function () {

        it('should not mess up the component', function () {

            var c = compiler.compile({"type": "form", controls: compiler.compile({"type": "input"})});
            expect(React.renderToStaticMarkup(c)).toBe('<form><div><input type="input"></div></form>');


        });

    });

    //@TODO write test for dup keys
});
