class StringSort {

    sort(a, b) {

        if (typeof a === 'string')
            a = a.replace(/\s+/, '').toLowerCase();

        if (typeof b === 'string')
            b = b.replace(/\s+/, '').toLowerCase();

        return (a > b) ? -1 : (a < b) ? 1 : 0;

    }

}

export default StringSort;