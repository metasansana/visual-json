import expect from 'must';
import Scope from '../../src/core/Scope';

var scope;
var localCtx;
var globalCtx;

describe('Scope', function () {

    beforeEach(function () {

        globalCtx = {
            window: {
                position:'22:14',
                alert() {
                }
            },
            document: {
                getElementById: (id)=>id
            }

        };

        localCtx = {};

    });

    beforeEach(function () {
        scope = new Scope(globalCtx, localCtx);
    });

    describe('Scope#set', function() {

        it('should set values to localCtx only', function() {

            scope.set('window', 'title', 'afru');
            expect(localCtx.window).exist();
            expect(localCtx.window.title).be('afru');
            expect(globalCtx.window.title).not.exist();
        });

    });

    describe('Scope#resolve', function() {

        it('should return the correct values', function() {

            scope.set('document', 'title', 'fifi');
            expect(scope.resolve('window.position')).equal('22:14');
            expect(scope.resolve('document.title')).equal('fifi');
        })

    });

});