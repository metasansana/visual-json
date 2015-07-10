import Sorts from '../Sorts';

var sorts;

describe('Sorts', function () {


    describe('Sorts#date', function () {

        it('should work', function () {

            expect(['24/08/09', '25-01-01', '31-12-08', '05-05-15', 'Mon, 25 Dec 2015 13:30:00 GMT'].sort(sorts.sort)).
                toEqual(['24/08/09', '25-01-01', '31-12-08', 'Mon, 25 Dec 2015 13:30:00 GMT', '05-05-15']);

        })


    });

    describe('Sorts#string', function () {

        it('should sort strings', function () {
            expect(['at', 'an', 'aa', 'bca', 'ad', 'baa', 'dapp'].sort(sort.sort)).
                toEqual(['dapp', 'bca', 'baa', 'at', 'an', 'ad', 'aa']);
        });

        it('should sort numbers', function () {
            expect([8, 0o316, 20, 0o312, 4, 4, 1, 0xffe].sort(sort.sort)).
                toEqual([4094, 206, 202, 20, 8, 4, 4, 1]);
        });

        it('should sort mixed values', function () {
            expect(['8', 'bca', 0, undefined, 3, '0', 0o312, '4', 'app', 0x1, undefined].sort(sort.sort)).
                toEqual(['bca', 202, '8', '4', 3, 1, 0, 'app', '0', undefined, undefined]);
        });

    });

    describe('Sorts#natural', function () {

        it('should group numbers and letters etc', function () {
            expect(['C1', 'D3245', 'A1', 'DX324', 44, 104, 0x222, undefined, 'aa', 'a'].sort(sort.sort)).
                toEqual(['aa', 'a', 'DX324', 'D3245', 'C1', 'A1', 546, 104, 44, undefined]);
        });

        it('should sort naturally', function () {
            expect(['z1.doc', 'z10.doc', 'z17.doc', 'z2.doc', 'z23.doc', 'z3.doc'].sort(sort.sort)).
                toEqual(['z23.doc', 'z17.doc', 'z10.doc', 'z3.doc', 'z2.doc', 'z1.doc']);
        });

    });

    describe('Sorts#number', function () {

        beforeEach(function () {
            sort = new NumberSort();
        })

        it('should work', function () {

            expect(
                ['25.25', '12.99', '27.8', undefined, 20.80, '7.5', 12, 7.5].sort(sort.sort)).
                toEqual(['27.8', '25.25', 20.80, '12.99', 12, 7.5, '7.5', undefined]);

        });

        it('should put NaN at the bottom', function () {


            var list = ['25.25', 12, NaN, 8].sort(sort.sort);
            expect(isNaN(list[3])).toBeTruthy();

        });

    });

});