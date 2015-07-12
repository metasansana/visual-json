'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _coreUtils = require('../core/Utils');

var _coreUtils2 = _interopRequireDefault(_coreUtils);

var _ParseAndCompileInSameBlockError = require('./ParseAndCompileInSameBlockError');

var _ParseAndCompileInSameBlockError2 = _interopRequireDefault(_ParseAndCompileInSameBlockError);

/**
 * ParseDirective handles a `$parse` directive.
 *
 * The work of this directive is limited to scaning for and calling other directives.
 * Directives found are handled in this order:
 * 1. $resource
 * 2. $set
 * 3. $request
 * 4. $parse | $compile
 *
 * A `$parse directive must have a $parse or a $compile but not both!
 * In the case of an embedded $parse, this $parse SHOULD have a `$compile` or
 * some `$parse` that has a `$compile` in its ancestors.
 *
 * In other words, the work of a compiler MUST end with a $compile.
 */

var ParseDirective = (function () {
    function ParseDirective(order, provider) {
        _classCallCheck(this, ParseDirective);

        this.order = order;
        this.provider = provider;
    }

    _createClass(ParseDirective, [{
        key: '_hasParseAndCompile',
        value: function _hasParseAndCompile(tree) {

            return tree.hasOwnProperty('$compile') && tree.hasOwnProperty('$parse');
        }
    }, {
        key: '_hasParseOrCompile',
        value: function _hasParseOrCompile(tree) {

            return tree.hasOwnProperty('$compile') || tree.hasOwnProperty('$parse');
        }
    }, {
        key: 'apply',
        value: function apply(tree, scope) {

            var ret = null;

            if (this._hasParseAndCompile(tree)) throw new _ParseAndCompileInSameBlockError2['default'](tree);
            if (!this._hasParseOrCompile(tree)) tree = { $compile: tree };

            this.order.slice().forEach((function ($) {

                if (tree.hasOwnProperty($)) {

                    if ($ === '$parse') return ret = this.apply(tree[$], scope);

                    if ($ === '$compile') return ret = this.provider.getDirectiveByName('$compile').apply(tree[$], scope);

                    this.provider.getDirectiveByName($).apply(tree[$], scope);
                }
            }).bind(this));

            return ret;
        }
    }, {
        key: 'applyWithResource',
        value: function applyWithResource(tree, scope, done) {

            var schedule = this.order.slice();
            var directives = this.provider;

            schedule.unshift('$resource');

            if (this._hasParseAndCompile(tree)) throw new _ParseAndCompileInSameBlockError2['default'](tree);
            if (!this._hasParseOrCompile(tree)) tree = { $compile: tree };

            var next = (function () {

                var $ = schedule.shift();

                if (!$) throw new Error('ParseDirective: Reached end of directive order with no $compile section! JSON: ' + JSON.stringify(tree));

                if (tree.hasOwnProperty($)) {

                    if ($ === '$parse') return this.applyWithResource(tree[$], scope, done);

                    if ($ === '$compile') return done(directives.getDirectiveByName('$compile').apply(tree[$], scope));

                    if ($ === '$resource') return directives.getDirectiveByName($).apply(tree[$], scope, next);

                    directives.getDirectiveByName($).apply(tree[$], scope);
                }

                next();
            }).bind(this);

            next();
        }
    }]);

    return ParseDirective;
})();

exports['default'] = ParseDirective;
module.exports = exports['default'];