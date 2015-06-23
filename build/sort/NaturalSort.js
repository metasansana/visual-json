"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NaturalSort = (function () {
    function NaturalSort() {
        _classCallCheck(this, NaturalSort);
    }

    _createClass(NaturalSort, [{
        key: "sort",
        value: function sort(a, b) {

            //Source: http://stackoverflow.com/questions/4340227/sort-mixed-alpha-numeric-array
            //author: http://stackoverflow.com/users/58/cmcculloh
            var reA = /[^a-zA-Z]/g;
            var reN = /[^0-9]/g;
            var AInt = parseInt(a, 10);
            var BInt = parseInt(b, 10);

            if (isNaN(AInt) && isNaN(BInt)) {
                var aA = a.replace(reA, "");
                var bA = b.replace(reA, "");
                if (aA === bA) {
                    var aN = parseInt(a.replace(reN, ""), 10);
                    var bN = parseInt(b.replace(reN, ""), 10);
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
    }]);

    return NaturalSort;
})();

exports["default"] = NaturalSort;
module.exports = exports["default"];