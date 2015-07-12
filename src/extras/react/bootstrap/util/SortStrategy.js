import DotAccess from 'dot-access';
import Sorts from './Sorts';

/**
 * SortStrategy is a factory for providing sort functions.
 */
class SortStrategy {

    /**
     *
     * @param {String|Function} sort Specifies the sort strategy to use, either builtin or custom.
     * @param {String} key The key to sort on, we only sort arrays of objects, no primitives allowed!
     * @returns {Function}
     */
    getStrategy(sort, key) {

        var sort = (typeof sort === 'function')? sort :
            (Sorts[sort])? Sorts[sort]: Sorts.string;

        return function(a, b) {
            return sort(DotAccess.get(a,key), DotAccess.get(b, key));
        }
    }

}
export default new SortStrategy();
