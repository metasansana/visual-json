import RequestDirective from '../../src/directives/RequestDirective';
import expect from 'must';

var scope;
var response;
var directive;
var engine;

describe('RequestDirective', function () {

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
            set(dest, name, value) {
                this[name] = value;
            },
            applySymbols(value) {
                return value;
            }
        };

    });

    beforeEach(function () {
        directive = new RequestDirective(engine);
    });

    describe('RequestDirective#apply', function () {

        it('should work', function () {
            directive.apply({load:{href:'/people', method:'get'}}, scope);
                expect(typeof scope.load).be('function');
        });

        it('RequestDirective#send', function () {

            directive.send({
                url: '/',
                method: 'PATCH',
                params: 24
            }).then(function (res) {
                expect(res.url).equal('/');
                expect(res.params).equal(24);
                return res;
            });

        });
    });
});