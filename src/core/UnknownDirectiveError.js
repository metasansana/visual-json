import ES2015Error from '../extras/ES2015Error';
/**
 * UnknownDirectiveError
 */
class UnknownDirectiveError extends ES2015Error {

    constructor(name) {
        super();
        this.message = 'Unable to find any directive named `'+name+'`!';
    }

}

export default UnknownDirectiveError