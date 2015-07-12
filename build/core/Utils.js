'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _merge2 = require('merge');

var _merge3 = _interopRequireDefault(_merge2);

/**
 * Utils provides some simple helper methods.
 */

var Utils = (function () {
    function Utils() {
        _classCallCheck(this, Utils);
    }

    _createClass(Utils, [{
        key: 'clone',
        value: function clone(o) {
            return JSON.parse(JSON.stringify(o));
        }
    }, {
        key: 'createSafeMap',
        value: function createSafeMap() {
            return Object.create(null);
        }
    }, {
        key: 'merge',
        value: function merge(a, b) {
            return (0, _merge3['default'])(a, b);
        }
    }]);

    return Utils;
})();

exports['default'] = new Utils();
module.exports = exports['default'];