'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _NumberSort = require('../NumberSort');

var _NumberSort2 = _interopRequireDefault(_NumberSort);

var sort;

describe('NumberSort', function () {

    beforeEach(function () {
        sort = new _NumberSort2['default']();
    });

    it('should work', function () {

        expect(['25.25', '12.99', '27.8', undefined, 20.8, '7.5', 12, 7.5].sort(sort.sort)).toEqual(['27.8', '25.25', 20.8, '12.99', 12, 7.5, '7.5', undefined]);
    });

    it('should put NaN at the bottom', function () {

        var list = ['25.25', 12, NaN, 8].sort(sort.sort);
        expect(isNaN(list[3])).toBeTruthy();
    });
});