'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _sortSortStrategy = require('../sort/SortStrategy');

var _sortSortStrategy2 = _interopRequireDefault(_sortSortStrategy);

/**
 * Waiter does the actual manipulation
 * of data on behalf of the table (sorting etc.)
 */

var Waiter = (function () {
    function Waiter() {
        _classCallCheck(this, Waiter);
    }

    _createClass(Waiter, [{
        key: 'sortOnColumnNumber',
        value: function sortOnColumnNumber(i, sortedOn, arrow, columns, data) {

            var freshData = data.slice();
            var columns = columns.slice();
            var column = columns[i];
            var results = {};
            var sortedData;

            results.arrow = sortedOn === i ? arrow === Waiter.DESC_ARROW ? Waiter.ASC_ARROW : Waiter.DESC_ARROW : Waiter.DESC_ARROW;

            if (sortedOn === i) {
                sortedData = freshData.reverse();
            } else {
                sortedData = freshData.sort(_sortSortStrategy2['default'].getSortFunc(column.sortAs, column.sortOn || column.name));
            }

            results.sortedOn = i;
            results.data = sortedData;
            results.columns = columns;
            return results;
        }
    }]);

    return Waiter;
})();

Waiter.DESC_ARROW = '⇩';
Waiter.ASC_ARROW = '⇧';
exports['default'] = new Waiter();
module.exports = exports['default'];