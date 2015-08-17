/**
 * SourcePlugin provides the source of the tree being parsed.
 * {
 *  visual:source: true
 * }
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var SourcePlugin = (function () {
  function SourcePlugin() {
    _classCallCheck(this, SourcePlugin);
  }

  _createClass(SourcePlugin, [{
    key: 'apply',

    /**
     *
     * @param {Tree} tree
     * @param {Scope} scope
     */
    value: function apply(tree, scope) {

      var $ = tree.getDirectiveTreeBySymbol(SourcePlugin.SYMBOL);
      if ($.isEmpty()) return;
      scope.set('$source', 'code', tree.isObject());
    }
  }]);

  return SourcePlugin;
})();

SourcePlugin.Symbol = 'visual:source';
exports['default'] = SourcePlugin;
module.exports = exports['default'];