'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Router = require('../Router');

var _Router2 = _interopRequireDefault(_Router);

var routes;
var app;

describe('Router', function () {

    beforeEach(function () {

        routes = [{
            url: '',
            id: 'main',
            view: { content: '<main></main>' }
        }, {
            url: '#/modal',
            id: 'modal',
            view: { content: '<modal></modal>' }
        }, {
            url: '#/login',
            id: 'login',
            view: { content: '<login></login>' }
        }];

        app = {
            renderContent: function renderContent(view, node, req) {
                this._route = { view: view, node: node, req: req };
            }
        };
    });

    describe('Router#configure', function () {

        it('should work ', function () {

            _Router2['default'].configure(routes, app);
        });
    });
});