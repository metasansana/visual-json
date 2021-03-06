/**
 * SetPlugin traverses a `$set` directive and puts the keys
 * found in the `$local` scope.
 *
 *
 * @example <caption>Example schema</caption>
 * {
 *  "visual:set": {
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

var SetPlugin = (function () {
  function SetPlugin() {
    _classCallCheck(this, SetPlugin);
  }

  _createClass(SetPlugin, [{
    key: 'apply',

    /**
     *
     * @param {Tree} tree
     * @param {Scope} scope
     */
    value: function apply(tree, scope) {

      var $ = tree.getDirectiveTreeBySymbol(SetPlugin.SYMBOL);

      if ($.isEmpty()) return;

      $.forEachKey(function (value, key) {
        scope.set('$local', key, value);
      });
    }
  }]);

  return SetPlugin;
})();

SetPlugin.SYMBOL = 'visual:set';
exports['default'] = SetPlugin;
module.exports = exports['default'];