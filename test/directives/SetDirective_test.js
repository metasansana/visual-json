import SetDirective from '../../src/directives/SetDirective';
import expect from 'must';

var directive;
var scope;


describe('SetDirective', function () {

    beforeEach(function () {

        scope = {
            set(key, name, value) {
                this[name] = value;
            },
            applySymbols(value) {
                return value;
            }
        };
    });

    beforeEach(function () {
        directive = new SetDirective();
    });

    describe('SetDirective#apply', function () {

        it('should work', function () {

            directive.apply({
                    name: 'person',
                    age: 33,
                    gender:'F'
                }, scope,
                function () {
                    expect(scope.name).equal('person');
                    expect(scope.age).equal(33);
                    expect(scope.gender).equal('F');
                })
        });
    });
});