'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _NaturalSort = require('../NaturalSort');

var _NaturalSort2 = _interopRequireDefault(_NaturalSort);

var strategy;

describe('AlphaNumericSort', function () {

    beforeEach(function () {
        strategy = new _NaturalSort2['default']();
    });

    it('should group numbers and letters etc', function () {
        expect(['C1', 'D3245', 'A1', 'DX324', 44, 104, 546, undefined, 'aa', 'a'].sort(strategy.sort)).toEqual(['aa', 'a', 'DX324', 'D3245', 'C1', 'A1', 546, 104, 44, undefined]);
    });

    it('should sort naturally', function () {
        expect(['z1.doc', 'z10.doc', 'z17.doc', 'z2.doc', 'z23.doc', 'z3.doc'].sort(strategy.sort)).toEqual(['z23.doc', 'z17.doc', 'z10.doc', 'z3.doc', 'z2.doc', 'z1.doc']);
    });
});