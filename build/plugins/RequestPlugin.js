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

var Adapter = {
    getParameters: function getParameters(params) {
        return params;
    }
};
/**
 * RequestPlugin traverses a `$request` directive and turns the definitions
 * there into executable functions.
 *
 * @example <caption>Example schema</caption>
 * {
 *      "href": "/dev/null",
 *      "method": "GET",
 *      "@adapter":"$global.QueryAdapter",
 *      "@onSuccess": "self.doSomething",
 *      "@onError": "self.fixError",
 *      "@params": "self.query"
 *  }
 */

var RequestPlugin = (function () {
    function RequestPlugin(engine) {
        _classCallCheck(this, RequestPlugin);

        this.engine = engine;
    }

    _createClass(RequestPlugin, [{
        key: 'send',

        /**
         *
         * @param schema
         * @returns {Promise.<T>}
         */
        value: function send(schema) {
            var method = schema.method;
            var url = schema.url;
            var params = schema.params;
            var adapter = schema.adapter;
            var onError = schema.onError;
            var before = schema.before;
            var after = schema.after;

            var request;

            method = method ? method.toLowerCase() : 'get';
            adapter = adapter || Adapter;
            params = adapter.getParameters(params);
            after = Array.isArray(after) ? after : [after];

            if (!this.engine) throw new Error('Request: No engine specified! Did you call setEngine()?');
            if (before) before();

            request = this.engine[method].call(this.engine, url, params);

            if (onError) request['catch'](onError);
            after.forEach(function (cb) {
                return request.then(cb);
            });
            return request;
        }
    }, {
        key: 'makeRequestFunction',
        value: function makeRequestFunction(schema) {
            var _this = this;

            return function () {
                return _this.send(schema);
            };
        }
    }, {
        key: 'apply',
        value: function apply(tree, scope) {
            var _this2 = this;

            var hot = tree.getDirectiveTreesBySymbol(RequestPlugin.REQUEST_HOT_SYMBOL);
            var cold = tree.getDirectiveTreesBySymbol(RequestPlugin.REQUEST_COLD_SYMBOL);

            hot.map(function (branch) {
                branch.receiveSymbols(scope);
                tree.set(branch.key, _this2.send(branch.toObject()));
            });

            cold.map(function (branch) {
                branch.receiveSymbols(scope);
                tree.set(branch.key, _this2.makeRequestFunction(branch.toObject()));
            });
        }
    }]);

    return RequestPlugin;
})();

RequestPlugin.REQUEST_HOT_SYMBOL = 'request_now:';
RequestPlugin.REQUEST_COLD_SYMBOL = 'request_call:';
exports['default'] = RequestPlugin;
module.exports = exports['default'];