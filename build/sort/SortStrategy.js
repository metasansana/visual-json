'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _dotAccess = require('dot-access');

var _dotAccess2 = _interopRequireDefault(_dotAccess);

var _StringSort = require('./StringSort');

var _StringSort2 = _interopRequireDefault(_StringSort);

var _DateSort = require('./DateSort');

var _DateSort2 = _interopRequireDefault(_DateSort);

var _NaturalSort = require('./NaturalSort');

var _NaturalSort2 = _interopRequireDefault(_NaturalSort);

var _NumberSort = require('./NumberSort');

var _NumberSort2 = _interopRequireDefault(_NumberSort);

var sorts = {
    date: _DateSort2['default'],
    string: _StringSort2['default'],
    natural: _NaturalSort2['default'],
    number: _NumberSort2['default']
};

/**
 * SortStrategy
 */

var SortStrategy = (function () {
    function SortStrategy() {
        _classCallCheck(this, SortStrategy);
    }

    _createClass(SortStrategy, [{
        key: 'getSortFunc',
        value: function getSortFunc(strategy, key) {

            var sort = sorts[strategy] ? new sorts[strategy]() : new _StringSort2['default']();

            return function (a, b) {
                return sort.sort(_dotAccess2['default'].get(a, key), _dotAccess2['default'].get(b, key));
            };
        }
    }]);

    return SortStrategy;
})();

exports['default'] = new SortStrategy();
module.exports = exports['default'];