import Error from '../extras/ES2015Error';
/**
 * UnknownDirectiveError
 */
class UnknownDirectiveError extends Error {

    constructor(name) {
        super('Unable to find any directive named `'+name+'`!');
    }

}

export default UnknownDirectiveError