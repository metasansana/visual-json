import expect from 'must';
import Tree from '../../src/core/Tree';
import Compiler from '../../src/core/Compiler';

var compiler;
var env;
var scope;
var parser;

class MockType {
    constructor(json){
        this.view = json;
    }
}

class OneType {
    constructor(json){
        this.view = json;
    }
}

class TwoType {
    constructor(json){
        this.view = json;
    }
}

class ThreeType {
    constructor(json){
        this.view = json;
    }
}


describe('Compiler', function () {

    beforeEach(function () {

        env = {
            parse(tree, scope) {
                return this.compile(tree, scope);
            },
            compile(tree, scope) {
                return compiler.compile(tree, scope);
            },
            getTypeByName(type){

                return {
                    compile(tree){
                        if(type == 'one') return new OneType(tree.toObject());
                        if(type == 'two') return new TwoType(tree.toObject());
                        if(type == 'three') return new ThreeType(tree.toObject());
                        return new MockType(tree.toObject());
                    },
                    getSource(type){
                        if(type == 'one') return OneType;
                        if(type == 'two') return TwoType;
                        if(type == 'three') return ThreeType;
                        return MockType;
                    }
                }
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

    });

    beforeEach(function () {
        compiler = new Compiler(env);
    });

    describe('Compiler#compile', function () {

       it('should compile an object', function () {

            expect(compiler.compile(new Tree({
                type: 'mock',
                onClick: function () {
                }
            },null), scope)).instanceOf(MockType);

        });

        it('should compile an array of objects', function () {

            var build = compiler.compile(new Tree([
                {type: "button"}, {type: "button"}, {type: "button"}
            ],null),scope);

            expect(build).instanceOf(Array);
            build.forEach((x)=> expect(x).instanceOf(MockType));

        });

        it('should compile key', function () {
            var build = compiler.compile(new Tree({
                 "type":"parent",
                 "compile:key":{"type":"mock"}
                }, null), scope);

            expect(build.view.key).instanceOf(MockType);

        });

        it('should switch compile default', function () {

            var tree = {
                "type": "parent",
                "compile_switch:key": {
                    "value":null,
                    "default":"one",
                    "case":{
                        "one":{"type":"one"},
                        "two":{"type":"two"},
                        "three":{"type":"three"}
                    }
                }
            };

            var build = compiler.compile(new Tree(tree, null), scope);
            expect(build.view.key).instanceOf(OneType);


        });

        it('should switch compile matched', function () {

            var tree = {
                "type": "parent",
                "compile_switch:key": {
                    "value":'three',
                    "default":"one",
                    "case":{
                        "one":{"type":"one"},
                        "two":{"type":"two"},
                        "three":{"type":"three"}
                    }
                }
            };

            var build = compiler.compile(new Tree(tree, null), scope);
            expect(build.view.key).instanceOf(ThreeType);


        });

        it('should provide source', function () {

            it('should compile key', function () {
                var build = compiler.compile(new Tree({
                    "type":"parent",
                    "src:key":"mock"
                }, null), scope, parser);

                expect(build.view.key).eql(MockType);

            });

        });


    });

});