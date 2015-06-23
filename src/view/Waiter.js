import SortStrategy from '../sort/SortStrategy';

/**
 * Waiter does the actual manipulation
 * of data on behalf of the table (sorting etc.)
 */
class Waiter {

    sortOnColumnNumber(i, sortedOn, arrow, columns, data) {

        var freshData = data.slice();
        var columns = columns.slice();
        var column = columns[i];
        var results = {};
        var sortedData;

        results.arrow = (sortedOn === i)? (arrow === Waiter.DESC_ARROW)?
            Waiter.ASC_ARROW: Waiter.DESC_ARROW :
            Waiter.DESC_ARROW;

        if (sortedOn === i) {
            sortedData = freshData.reverse();
        } else {
            sortedData = freshData.sort(SortStrategy.
                getSortFunc(column.sortAs, column.sortOn || column.name));
        }

        results.sortedOn = i;
        results.data = sortedData;
        results.columns = columns;
        return results;

    }

}
Waiter.DESC_ARROW = '\u21e9';
Waiter.ASC_ARROW = '\u21e7';
export default new Waiter();
