import dot from 'property-seek';
import StringSort from './StringSort';
import DateSort from './DateSort';
import NaturalSort from './NaturalSort';
import NumberSort from './NumberSort';

var sorts = {
    date: DateSort,
    string:StringSort,
    natural: NaturalSort,
    number: NumberSort
};

/**
 * SortStrategy
 */
class SortStrategy {

    getSortFunc(strategy, key) {

        var sort = (sorts[strategy])? new sorts[strategy](): new StringSort();

        return function(a, b){
            return sort.sort(dot.get(a,key), dot.get(b, key));
        }
    }

}
export default new SortStrategy();
