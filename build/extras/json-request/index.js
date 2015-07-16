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

var Request = (function () {
    function Request(engine) {
        _classCallCheck(this, Request);

        this.engine = engine;
    }

    _createClass(Request, [{
        key: 'promiseRequestFromJSON',

        /**
         *
         * @param schema
         * @returns {Promise.<T>}
         */
        value: function promiseRequestFromJSON(schema) {

            var method = schema.method ? schema.method.toLowerCase() : 'get';
            var url = schema.url;
            var params = schema.params;
            var adapter = schema.adapter || Adapter;
            params = adapter.getParameters(params);

            if (!this.engine) throw new Error('Request: No engine specified! Did you call setEngine()?');
            return engine[method].call(engine, url, params);
        }
    }, {
        key: 'setEngine',
        value: function setEngine(engine) {
            this.engine = engine;
        }
    }]);

    return Request;
})();

exports['default'] = Request;
module.exports = exports['default'];