import expect from 'must';
import Compiler from '../../src/directives/Compiler';

var compiler;
var typeSystem;

class MockType {};

describe('Compiler', function() {

    beforeEach(function() {

        typeSystem = {

            getTypeFor(){
                return {
                    compile(){
                       return new MockType();
                    }
                }
            }
        };
    });

    beforeEach(function() {
       compiler = new Compiler(typeSystem);
    });

    describe('Compiler#compile', function() {

        it('should compile an object', function() {

            expect(compiler.compile({
                type: 'button',
                onClick: function(){}
            })).instanceOf(MockType);

        });

        it('should compile an array of objects', function() {

            var build = compiler.compile([
                {type:"button"},{type:"button"},{type:"button"}
            ]);

            expect(build).instanceOf(Array);
            build.forEach((x)=> expect(x).instanceOf(MockType));

        });

    });

});