import expect from 'must';
import ParseDirective from '../../src/directives/ParseDirective';
import ParseAndCompileInSameBlockError from '../../src/directives/ParseAndCompileInSameBlockError';

var directive;
var provider;
var order;
var called;
var sequence;
var scope;

describe('ParseDirective', function () {

    beforeEach(function () {

        scope = {
            set(dest, name, value) {
                this[name] = value;
            },
            applySymbols(value) {
                return value;
            }
        };

        order = ['$resource', '$request', '$compile', '$parse', '$continue'];

        called = {
            $resource: 0,
            $request: 0,
            $compile: 0,
            $parse: 0
        };

        sequence = [];

        provider = {

            $resource: {
                apply(tree, scope, done) {
                    called.$resource++;
                    sequence.push('$resource');
                    done();
                }
            },

            $request: {
                apply(tree, scope, done) {
                    called.$request++;
                    sequence.push('$request');
                    done();
                }
            },

            $compile: {
                apply(tree, scope, done) {
                    called.$compile++;
                    sequence.push('$compile');
                    done({content: 'xyz'});
                }
            },

            $parse: directive,

            getByName(name) {
                return this[name];
            }

        };

        directive = new ParseDirective(order, provider);

    });

    describe('ParseDirective#apply', function () {

        it('should respect order', function (done) {

            directive.apply({$compile:{},$request: {},$resource: {}}, scope, function() {
                expect(sequence).eql(['$resource', '$request', '$compile']);
                done();
            });

        });

        it('should allow $parse', function (done) {

            directive.apply({$request: {}, $resource: {}, $parse:{$resource:{}, $compile:{}}}, scope, function() {
                expect(sequence).eql(['$resource', '$request',  '$resource', '$compile']);
                done();
            });

        });

        it('should allow nested $parse', function (done) {

            directive.apply({
                $request: {},
                $resource: {},
                $parse:{
                    $resource:{},
                    $parse:{$request:{}, $parse:{$request:{}, $resource:{},$compile:{}}}
                }}, scope, function() {
                expect(sequence).eql(['$resource','$request','$resource', '$request', '$resource', '$request', '$compile']);
                done();
            });

        });

        it('should freak out when there are both $compile and $parse directives', function (done) {

            var run = function() {
                directive.apply({$compile: {}, $parse: {}}, scope, function () {
                });
            };
            expect(run).throw(ParseAndCompileInSameBlockError);
            done();

        });



    });

});


