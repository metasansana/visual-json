import ES2015Error from '../extras/ES2015Error';
/**
 * UnknownTypeError
 */
class UnknownTypeError extends ES2015Error {

    constructor(name) {
        super();
        this.message = 'Unable to find any type named `'+name+'`!';
    }

}

export default UnknownTypeError