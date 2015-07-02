import Request from '../src/directives/Request';
import must from 'must';
import Promise from 'bluebird';

var request;
var fakeEngine = {
    patch: function (url, params) {

        return new Promise(function (resolve) {
            resolve({url: url, params: params});
        })

    }

};

describe('Request', function () {

    beforeEach(function () {
        request = new Request(fakeEngine);
    });

    describe('Request#send', function () {



        it('should work', function () {

            request.send({
                url: '/',
                method: 'PATCH',
                params: 24
            }).then(function (res) {

                must(res.url).equal('/');
                must(res.params).equal(24);

            });

        });

    });

});