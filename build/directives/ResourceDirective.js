'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _coreUtils = require('../core/Utils');

var _coreUtils2 = _interopRequireDefault(_coreUtils);

var _RequestDirective2 = require('./RequestDirective');

var _RequestDirective3 = _interopRequireDefault(_RequestDirective2);

/**
 * ResourceDirective scans a `$resource` directive and executes a request.
 *
 * A request for the resource is executed at $parse time and the resulting response is put
 * into scope.
 *
 *  @example <caption>Example schema</caption>:
 *   "$resource": {
 *      "name": "person":,
 *      "request": {
 *        "url": "/api/persons",
 *        "method": "GET"
 *       },
 *       "links"{}
 *   }
 * The $resource schema must have only one property, this property is used as
 * the name of the resource when adding to scope.
 * @param {HTTPEngine} engine
 *
 */

var ResourceDirective = (function (_RequestDirective) {
    function ResourceDirective() {
        _classCallCheck(this, ResourceDirective);

        if (_RequestDirective != null) {
            _RequestDirective.apply(this, arguments);
        }
    }

    _inherits(ResourceDirective, _RequestDirective);

    _createClass(ResourceDirective, [{
        key: 'apply',
        value: function apply(tree, scope, done) {

            this.send(tree.request).then((function (res) {

                var data = res.data || res.body;
                var links = _coreUtils2['default'].createSafeMap();

                if (tree.links) if (Array.isArray(data.links)) for (var key in tree.links) data.links.forEach((function (link) {
                    if (link.rel === key) links[key] = this.makeRequestFunction(_coreUtils2['default'].merge(link, scope.applySymbols(tree.links[key])));
                }).bind(this));

                scope.set('$resource', tree.name, { data: data, links: links });

                done();
            }).bind(this));
        }
    }]);

    return ResourceDirective;
})(_RequestDirective3['default']);

exports['default'] = ResourceDirective;
module.exports = exports['default'];