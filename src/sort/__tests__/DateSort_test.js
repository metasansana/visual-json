import DateSort from '../DateSort';

var strategy;

describe('DefaultSort', function () {

    beforeEach(function () {
        strategy = new DateSort();
    })

    it('should work', function () {

        expect(['24/08/09','25-01-01', '31-12-08', '05-05-15', 'Mon, 25 Dec 2015 13:30:00 GMT'].sort(strategy.sort)).
            toEqual(['24/08/09','25-01-01','31-12-08','Mon, 25 Dec 2015 13:30:00 GMT','05-05-15']);

    })


});