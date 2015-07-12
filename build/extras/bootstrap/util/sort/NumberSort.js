"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NumberSort = (function () {
    function NumberSort() {
        _classCallCheck(this, NumberSort);
    }

    _createClass(NumberSort, [{
        key: "sort",
        value: function sort(a, b) {

            a = parseFloat(a);
            b = parseFloat(b);

            a = isNaN(a) ? -Infinity : a;
            b = isNaN(b) ? -Infinity : b;

            return a > b ? -1 : a < b ? 1 : 0;
        }
    }]);

    return NumberSort;
})();

exports["default"] = NumberSort;
module.exports = exports["default"];