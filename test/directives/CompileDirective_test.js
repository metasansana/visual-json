import expect from 'must';
import CompileDirective from '../../src/directives/CompileDirective';

var compiler;
var env;

class MockType {};

describe('Compiler', function() {

    beforeEach(function() {

        env = {

            getTypeByName(){
                return {
                    compile(){
                       return new MockType();
                    }
                }
            }
        };
    });

    beforeEach(function() {
       compiler = new CompileDirective(env);
    });

    describe('CompileDirective#compile', function() {

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