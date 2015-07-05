import merge from 'merge';
/**
 * Utils provides some simple helper methods.
 */
class Utils {

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