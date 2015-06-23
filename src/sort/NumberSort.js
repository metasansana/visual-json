class NumberSort {

    sort(a, b) {

        a = parseFloat(a);
        b = parseFloat(b);

        a = (isNaN(a))? -Infinity : a;
        b = (isNaN(b))? -Infinity: b;

        return (a > b) ? -1 : (a < b) ? 1 : 0;

    }

}

export default NumberSort;