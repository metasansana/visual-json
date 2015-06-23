class DateSort {

    sort(a, b) {
        a = new Date(a).getTime();
        b = new Date(b).getTime();
        return a > b ? -1 : a < b ? 1 : 0;
    }
}
export default DateSort;