import merge from 'merge';
/**
 * Utils provides some simple helper methods.
 */
class Utils {

    endsWith(subjectString, searchString, position) {

        if (position === undefined || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;

    }

    startsWith(subjectString, searchString, position) {
        position = position || 0;
        return subjectString.indexOf(searchString, position) === position;
    }

    clone(o){
        return JSON.parse(JSON.stringify(o));
    }

    createSafeMap(){
        return Object.create(null);
    }

    merge(a,b) {
        return merge(a,b);
    }

}

export default new Utils();