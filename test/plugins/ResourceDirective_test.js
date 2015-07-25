import ResourceDirective from '../../src/plugins/ResourceDirective';
import expect from 'must';
import Promise from 'bluebird';

var request;
var scope;
var response;
var directive;
var engine;

describe('ResourceDirective', function () {

    beforeEach(function () {
        response = {data: {a: 1, b: 2, c: 3, links: [{rel: 'create', href: '/create'}]}};
    });

    beforeEach(function () {

        engine = {
            get(url, params) {
                return new Promise(function (resolve) {
                    resolve(response);
                })
            },
            patch(url, params) {
                return new Promise(function (resolve) {
                    resolve(response);
                })
            }
        }
    });

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
        directive = new ResourceDirective(engine);
    });

    describe('ResourceDirective#apply', function () {

        it('should work', function (done) {

            directive.apply({
                    name: 'person',
                    request: {href: '/nowhere', method: 'get'},
                    links: {'create': {}}
                }, scope,
                function () {
                    expect(scope.person).exist();
                    expect(scope.person.data).eql(response.data);
                    expect(typeof scope.person.links.create).be('function');
                    done();
                })
        });
    });
});