import expect from 'must';
import Parser from '../../src/core/Parser';

var parser;
var directives;
var scope;
var compiler;

describe('Parser', function () {

    beforeEach(function () {

        scope = {
            set(dest, name, value) {
                this[name] = value;
            },
            applySymbols(value) {
                return value;
            }
        };

        directives = [
            {
                apply(){
                    this.called = true;
                }
            },
            {
                apply(){
                    this.called = true;
                }
            },
            {
                apply(){
                    this.called = true;
                }
            }
        ];

        compiler = {
            compile(a) {
                this.compiled = true;
                return a;
            }
        };

        parser = new Parser(compiler, directives);

    });

    describe('Parser#parse', function () {

        it('should work', function () {

            parser.parse(scope, {});

            expect(compiler.compiled).eql(true);
            directives.map(d=>expect(d.called).eql(true));


        });

        it('should return non trees', function() {

            expect(parser.parse(scope, '<html>')).eql('<html>');
        });

    });



});


