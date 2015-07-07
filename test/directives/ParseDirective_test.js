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

        order = ['$request', '$compile', '$parse', '$continue'];

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
                apply(tree, scope) {
                    called.$request++;
                    sequence.push('$request');
                }
            },

            $compile: {
                apply(tree, scope) {
                    called.$compile++;
                    sequence.push('$compile');
                    return {content: 'xyz'};
                }
            },

            $parse: directive,

            getDirectiveByName(name) {
                return this[name];
            }

        };

        directive = new ParseDirective(order, provider);

    });

    describe('ParseDirective#applyWithResource', function () {

        it('should respect order', function (done) {

            directive.applyWithResource({$compile: {}, $request: {}, $resource: {}}, scope, function () {
                expect(sequence).eql(['$resource', '$request', '$compile']);
                done();
            });

        });

        it('should allow $parse', function (done) {

            directive.applyWithResource({
                $request: {},
                $resource: {},
                $parse: {$resource: {}, $compile: {}}
            }, scope, function () {
                expect(sequence).eql(['$resource', '$request', '$resource', '$compile']);
                done();
            });

        });

        it('should allow nested $parse', function (done) {

            directive.applyWithResource({
                $request: {},
                $resource: {},
                $parse: {
                    $resource: {},
                    $parse: {$request: {}, $parse: {$request: {}, $resource: {}, $compile: {}}}
                }
            }, scope, function () {
                expect(sequence).eql(['$resource', '$request', '$resource', '$request', '$resource', '$request', '$compile']);
                done();
            });

        });

        it('should freak out when there are both $compile and $parse directives', function (done) {

            var run = function () {
                directive.applyWithResource({$compile: {}, $parse: {}}, scope, function () {
                });
            };
            expect(run).throw(ParseAndCompileInSameBlockError);
            done();

        });

        it('should compile if $parse || $compile not specified', function () {

            directive.applyWithResource({type: "blank"}, scope, function () {
                expect(sequence).eql(['$compile']);
            });

        });


    });

    describe('ParseDirective#apply', function () {

        it('should respect order', function () {

            directive.apply({$compile: {}, $request: {}}, scope);
            expect(sequence).eql(['$request', '$compile']);
        });

        it('should allow $parse', function () {

            directive.apply({$request: {}, $parse: {$compile: {}}}, scope);

            expect(sequence).eql(['$request', '$compile']);
        });

        it('should allow nested $parse', function () {

            directive.apply({
                $request: {},
                $resource: {},
                $parse: {
                    $parse: {$request: {}, $parse: {$request: {}, $compile: {}}}
                }
            }, scope);

            expect(sequence).eql(['$request', '$request', '$request', '$compile']);

        });

        it('should freak out when there are both $compile and $parse directives', function () {

            var run = function () {
                directive.apply({$compile: {}, $parse: {}}, scope);
            };
            expect(run).throw(ParseAndCompileInSameBlockError);

        });

        it('should compile if $parse || $compile not specified', function () {

            directive.apply({type: "blank"}, scope);
            expect(sequence).eql(['$compile']);

        });

    });

});


