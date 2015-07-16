'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _dotAccess = require('dot-access');

var _dotAccess2 = _interopRequireDefault(_dotAccess);

var _Sorts = require('./Sorts');

var _Sorts2 = _interopRequireDefault(_Sorts);

/**
 * SortStrategy is a factory for providing sort functions.
 */

var SortStrategy = (function () {
    function SortStrategy() {
        _classCallCheck(this, SortStrategy);
    }

    _createClass(SortStrategy, [{
        key: 'getStrategy',

        /**
         *
         * @param {String|Function} sort Specifies the sort strategy to use, either builtin or custom.
         * @param {String} key The key to sort on, we only sort arrays of objects, no primitives allowed!
         * @returns {Function}
         */
        value: function getStrategy(sort, key) {

            var sort = typeof sort === 'function' ? sort : _Sorts2['default'][sort] ? _Sorts2['default'][sort] : _Sorts2['default'].string;

            return function (a, b) {
                return sort(_dotAccess2['default'].get(a, key), _dotAccess2['default'].get(b, key));
            };
        }
    }]);

    return SortStrategy;
})();

exports['default'] = new SortStrategy();
module.exports = exports['default'];