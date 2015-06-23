import StringSort from '../StringSort';

var sort;

describe('StringSort', function () {

    beforeEach(function () {
        strategy = new StringSort();
    });

    it('should sort strings', function () {
        expect(['at','an', 'aa','bca','ad','baa', 'dapp'].sort(strategy.sort)).
            toEqual(['dapp','bca','baa','at','an','ad','aa']);
    });

    it('should sort numbers', function () {
        expect([8,0o316,20,0o312,4,4,1,0xffe].sort(strategy.sort)).
            toEqual([4094,206,202,20,8,4,4,1]);
    });

    it('should sort mixed values', function () {
        expect(['8','bca',0,undefined, 3, '0', 0o312,'4','app',0x1, undefined].sort(strategy.sort)).
            toEqual(['bca',202,'8','4',3,1,0,'app','0',undefined,undefined]);
    });

});