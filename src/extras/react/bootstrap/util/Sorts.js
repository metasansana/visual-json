/**
 * Sorts provides some sorts that you may find useful
 */
class Sorts {

    date(a, b) {
        a = new Date(a).getTime();
        b = new Date(b).getTime();
        return a > b ? -1 : a < b ? 1 : 0;
    }

    string(a, b) {

        if (typeof a === 'string')
            a = a.replace(/\s+/, '').toLowerCase();

        if (typeof b === 'string')
            b = b.replace(/\s+/, '').toLowerCase();

        return (a > b) ? -1 : (a < b) ? 1 : 0;

    }

    natural(a, b) {

        //Source: http://stackoverflow.com/questions/4340227/sort-mixed-alpha-numeric-array
        //author: http://stackoverflow.com/users/58/cmcculloh
        var reA = /[^a-zA-Z]/g;
        var reN = /[^0-9]/g;
        var AInt = parseInt(a, 10);
        var BInt = parseInt(b, 10);

        if (isNaN(AInt) && isNaN(BInt)) {
            var aA = a.replace(reA, "");
            var bA = b.replace(reA, "");
            if (aA === bA) {
                var aN = parseInt(a.replace(reN, ""), 10);
                var bN = parseInt(b.replace(reN, ""), 10);
                return aN === bN ? 0 : aN > bN ? -1 : 1;
            } else {
                return aA > bA ? -1 : 1;
            }
        } else if (isNaN(AInt)) {//A is not an Int
            return -1;//to make alphanumeric sort first return -1 here
        } else if (isNaN(BInt)) {//B is not an Int
            return 1;//to make alphanumeric sort first return 1 here
        } else {
            return AInt > BInt ? -1 : 1;
        }
    }

    number(a, b) {

        a = parseFloat(a);
        b = parseFloat(b);

        a = (isNaN(a))? -Infinity : a;
        b = (isNaN(b))? -Infinity: b;

        return (a > b) ? -1 : (a < b) ? 1 : 0;

    }

}

export default new Sorts();