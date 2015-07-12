'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var StringSort = (function () {
    function StringSort() {
        _classCallCheck(this, StringSort);
    }

    _createClass(StringSort, [{
        key: 'sort',
        value: function sort(a, b) {

            if (typeof a === 'string') a = a.replace(/\s+/, '').toLowerCase();

            if (typeof b === 'string') b = b.replace(/\s+/, '').toLowerCase();

            return a > b ? -1 : a < b ? 1 : 0;
        }
    }]);

    return StringSort;
})();

exports['default'] = StringSort;
module.exports = exports['default'];