'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _StringSort = require('../StringSort');

var _StringSort2 = _interopRequireDefault(_StringSort);

var sort;

describe('StringSort', function () {

    beforeEach(function () {
        strategy = new _StringSort2['default']();
    });

    it('should sort strings', function () {
        expect(['at', 'an', 'aa', 'bca', 'ad', 'baa', 'dapp'].sort(strategy.sort)).toEqual(['dapp', 'bca', 'baa', 'at', 'an', 'ad', 'aa']);
    });

    it('should sort numbers', function () {
        expect([8, 206, 20, 202, 4, 4, 1, 4094].sort(strategy.sort)).toEqual([4094, 206, 202, 20, 8, 4, 4, 1]);
    });

    it('should sort mixed values', function () {
        expect(['8', 'bca', 0, undefined, 3, '0', 202, '4', 'app', 1, undefined].sort(strategy.sort)).toEqual(['bca', 202, '8', '4', 3, 1, 0, 'app', '0', undefined, undefined]);
    });
});