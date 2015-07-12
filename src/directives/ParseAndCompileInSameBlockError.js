import Error from '../extras/ES2015Error';

class ParseAndCompileInSameBlockError extends Error {
    constructor(tree){
        super();
        this.message = 'You MUST not have $parse and $compile in the same block! Schema: '+JSON.stringify(tree);
    }
}

export default ParseAndCompileInSameBlockError