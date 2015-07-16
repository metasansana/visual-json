/**
 * Sorts provides some sorts that you may find useful
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Sorts = (function () {
    function Sorts() {
        _classCallCheck(this, Sorts);
    }

    _createClass(Sorts, [{
        key: 'date',
        value: function date(a, b) {
            a = new Date(a).getTime();
            b = new Date(b).getTime();
            return a > b ? -1 : a < b ? 1 : 0;
        }
    }, {
        key: 'string',
        value: function string(a, b) {

            if (typeof a === 'string') a = a.replace(/\s+/, '').toLowerCase();

            if (typeof b === 'string') b = b.replace(/\s+/, '').toLowerCase();

            return a > b ? -1 : a < b ? 1 : 0;
        }
    }, {
        key: 'natural',
        value: function natural(a, b) {

            //Source: http://stackoverflow.com/questions/4340227/sort-mixed-alpha-numeric-array
            //author: http://stackoverflow.com/users/58/cmcculloh
            var reA = /[^a-zA-Z]/g;
            var reN = /[^0-9]/g;
            var AInt = parseInt(a, 10);
            var BInt = parseInt(b, 10);

            if (isNaN(AInt) && isNaN(BInt)) {
                var aA = a.replace(reA, '');
                var bA = b.replace(reA, '');
                if (aA === bA) {
                    var aN = parseInt(a.replace(reN, ''), 10);
                    var bN = parseInt(b.replace(reN, ''), 10);
                    return aN === bN ? 0 : aN > bN ? -1 : 1;
                } else {
                    return aA > bA ? -1 : 1;
                }
            } else if (isNaN(AInt)) {
                //A is not an Int
                return -1; //to make alphanumeric sort first return -1 here
            } else if (isNaN(BInt)) {
                //B is not an Int
                return 1; //to make alphanumeric sort first return 1 here
            } else {
                return AInt > BInt ? -1 : 1;
            }
        }
    }, {
        key: 'number',
        value: function number(a, b) {

            a = parseFloat(a);
            b = parseFloat(b);

            a = isNaN(a) ? -Infinity : a;
            b = isNaN(b) ? -Infinity : b;

            return a > b ? -1 : a < b ? 1 : 0;
        }
    }]);

    return Sorts;
})();

exports['default'] = new Sorts();
module.exports = exports['default'];