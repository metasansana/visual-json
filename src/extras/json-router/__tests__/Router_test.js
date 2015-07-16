import Router from '../Router';

var routes;
var app;

describe('Router', function () {

    beforeEach(function () {

        routes = [
            {
                url: '',
                id: 'main',
                view: {content: '<main></main>'}
            },
            {
                url: '#/modal',
                id: 'modal',
                view: {content: '<modal></modal>'}
            },
            {
                url: '#/login',
                id: 'login',
                view: {content: '<login></login>'}
            }
        ];



        app = {
            renderContent(view, node, req) {
                this._route = {view:view, node:node, req:req};
            }
        };

    });

    describe('Router#configure', function () {

        it('should work ', function () {

            Router.configure(routes, app);
        });

    })

});