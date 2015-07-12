/**
 * SetDirective traverses a `$set` directive and puts the keys
 * found in the `$local` scope.
 *
 *
 * @example <caption>Example schema</caption>
 * {
 *  "$set": {
 *       @id: "$resource.report.data.reportID",
 *      "oid": "23"
 *  }
 * }
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var SetDirective = (function () {
    function SetDirective() {
        _classCallCheck(this, SetDirective);
    }

    _createClass(SetDirective, [{
        key: 'apply',
        value: function apply(tree, scope, done) {

            tree = scope.applySymbols(tree);

            for (var key in tree) if (tree.hasOwnProperty(key)) scope.set('$local', key, tree[key]);
        }
    }]);

    return SetDirective;
})();

exports['default'] = SetDirective;
module.exports = exports['default'];