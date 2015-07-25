import expect from 'must';
import Parser from '../../src/core/Parser';
import Tree from '../../src/core/Tree';

var parser;
var scope;
var env;
var plugins;

describe('Parser', function () {

    beforeEach(function () {

        plugins = [
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

        env = {
            parseCalled: 0,
            compileCalled: 0,
            parse(tree, scope) {
                this.parseCalled++;
                return this.compile(tree, scope);
            },
            compile(tree, scope) {
                this.compileCalled++;
                return tree;
            },
            getPlugins() {
                return plugins;
            }

        };

        scope = {
            called: {
                applySymbols: []
            },
            applySymbols(a){

                this.called.applySymbols.push[a];
                return a;

            },
            clone() {
                return this;
            }
        };

        parser = new Parser(env);

    });

    describe('Parser#parse', function () {

        it('should apply plugins', function () {
            parser.parse(new Tree({}, null), scope);
            expect(env.compileCalled).eql(1);
            plugins.map(d=>expect(d.called).eql(true));
        });

        it('should obey the ignore directive', function () {
            parser.parse(new Tree({"type": "mock", "visual:ignore": true}, null), scope);
            expect(env.compileCalled).eql(0);
        });

        it('should return non trees', function () {
            expect(parser.parse(new Tree('<html>'), scope)).eql('<html>');
        });

    });
});


