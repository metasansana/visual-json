'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _grapnel = require('grapnel');

var _grapnel2 = _interopRequireDefault(_grapnel);

/**
 * Router provides a simple json powered view router.
 *
 * Define your routes in a json file and pass it to Router#configure.
 * The json file must be valid and follow this syntax:
 * @example
 * {
 *   "resource":"/api/specimens",
 *   "url":"#/specimens/new",
 *   "controller":"FormView",
 *   "target": "content0",
 *   "view": {$ref:"specimen_something.json"
 * }
 *
 */

var Router = (function () {
    function Router(framework) {
        _classCallCheck(this, Router);

        this.framework = framework;
    }

    _createClass(Router, [{
        key: 'configure',

        /**
         * configure sets up a list of routes with the global router.
         * @param {Array} routes
         * @param {Application} spa
         */
        value: function configure(routes, spa) {
            var _this = this;

            routes.forEach(function (route) {
                return _this.framework.get(route.url, function (req) {
                    return spa.renderContent(route.view, document.getElementById(route.container), req);
                });
            });
        }
    }]);

    return Router;
})();

exports['default'] = new Router(new _grapnel2['default']());
module.exports = exports['default'];