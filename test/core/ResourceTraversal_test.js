import ResourceTraversal from '../../src/core/ResourceTraversal';
import expect from 'must';


var request;
var scope;
var response;
var traversal;

describe('ResourceTraversal', function () {

    beforeEach(function () {

        response = {data:{a: 1, b: 2, c: 3, links:[{rel:'create', href:'/create'}]}};

        request = {
            send: function () {
                return {
                    then: function (cb) {
                        cb(response);
                    }
                }
            }
        };

        scope = {
            addToResource: function (name, value) {
                this[name] = value;
            }
        };

    });

    beforeEach(function () {
        traversal = new ResourceTraversal(request, scope);
    });

    describe('ResourceTraversal#traverse', function () {

        it('should work', function () {

            traversal.traverse({name:'person', request:{href: '/nowhere'}, links:{'create':{}}}, function () {
                console.log(scope);
                expect(scope.person).exist();
                expect(scope.person.data).eql(response.data);
                expect(typeof scope.person.links.create).be('function');
            })

        });

    });

});