'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var done = function done(result) {
    return result;
};
var onError = function onError(e) {
    return e;
};
/**
 * RequestDirective traverses a `$request` directive and turns the definitions
 * there into executable functions.
 *
 * @example <caption>Example schema</caption>
 * {
 *  "$request":
 *    "nullRequest": {
 *      "href": "/dev/null",
 *      "method": "GET",
 *      "@onSuccess": "self.doSomething",
 *      "@onError": "self.fixError",
 *      "@params": "self.query"
 *    }
 *  }
 */

var RequestDirective = (function () {
    function RequestDirective(engine) {
        _classCallCheck(this, RequestDirective);

        this.engine = engine;
    }

    _createClass(RequestDirective, [{
        key: 'makeRequestFunction',
        value: function makeRequestFunction(schema) {
            return function () {
                return this.send(schema);
            };
            bind(this);
        }
    }, {
        key: 'apply',
        value: function apply(tree, scope, done) {

            for (var key in tree) if (tree.hasOwnProperty(key)) scope.set('$request', key, this.makeRequestFunction(tree[key]));
        }
    }, {
        key: 'send',

        /**
         * send the request
         * @param {Object} schema A request schema object that is used to build the request.
         * @param {String} schema.method
         * @param {String} schema.href
         * @param {RequestAdapter} [schema.adapter]
         * @param {Function} [schema.onSuccess]
         * @param {Function} [schema.onError]
         * @param {HTTPEngine} [schema.engine]
         * @returns {Promise}
         */
        value: function send(schema) {

            var engine = schema.engine || this.engine;
            var method = schema.method.toLowerCase();
            var url = schema.url;
            var params = schema.params;

            if (schema.adapter) {
                url = schema.adapter.getUrl(schema);
                params = schema.adapter.getParams(schema);
            }

            return engine[method].call(engine, url, params).then(schema.onSuccess || done)['catch'](schema.onError || onError);
        }
    }]);

    return RequestDirective;
})();

exports['default'] = RequestDirective;
module.exports = exports['default'];