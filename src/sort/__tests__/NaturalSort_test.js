import NaturalSort from '../NaturalSort';

var strategy;

describe('AlphaNumericSort', function () {

    beforeEach(function () {
        strategy = new NaturalSort();
    });

    it('should group numbers and letters etc', function () {
        expect(['C1','D3245','A1', 'DX324',44,104,0x222, undefined, 'aa', 'a'].sort(strategy.sort)).
            toEqual(['aa','a','DX324','D3245','C1','A1',546,104,44,undefined]);
    });

    it('should sort naturally', function () {
        expect(['z1.doc', 'z10.doc', 'z17.doc', 'z2.doc', 'z23.doc', 'z3.doc'].sort(strategy.sort)).
            toEqual(['z23.doc','z17.doc','z10.doc','z3.doc','z2.doc','z1.doc']);
    });

});