import Error from '../extras/ES2015Error';
/**
 * UnknownTypeError
 */
class UnknownTypeError extends Error {

    constructor(name) {
        super('Unable to find any type named `'+name+'`!');
    }

}

export default UnknownTypeError