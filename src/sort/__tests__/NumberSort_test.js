import NumberSort from '../NumberSort';

var sort;

describe('NumberSort', function () {

    beforeEach(function () {
        sort = new NumberSort();
    })

    it('should work', function () {

        expect(
            ['25.25','12.99','27.8',undefined,20.80,'7.5',12,7.5].sort(sort.sort)).
            toEqual(['27.8','25.25',20.80,'12.99',12,7.5,'7.5',undefined]);

    });

    it('should put NaN at the bottom', function(){


            var list = ['25.25',12,NaN, 8].sort(sort.sort);
            expect(isNaN(list[3])).toBeTruthy();

    });



});