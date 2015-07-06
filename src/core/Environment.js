import jhr from 'jhr';
import merge from 'merge';
import Scope from './Scope';
import Compiler from './Compiler';
import SymbolParser from './SymbolParser';
import ResourceDirective from '../directives/ResourceDirective';
import SetDirective from '../directives/SetDirective';
import RequestDirective from '../directives/RequestDirective';
import CompileDirective from '../directives/CompileDirective';
import ParseDirective from '../directives/ParseDirective';
import UnknownDirectiveError from './UnknownDirectiveError';
import UnknownTypeError from './UnknownTypeError';

/**
 * Environment
 */
class Environment {

    constructor(types) {

        var agent = jhr.createAgent();

        this.directives = {
            $resource: new ResourceDirective(agent),
            $set: new SetDirective(),
            $request: new RequestDirective(agent),
            $compile: new CompileDirective(new Compiler(this)),
            $parse: new ParseDirective(['$resource', '$set', '$request', '$compile', '$parse'], this)
        };

        this.globalCtx = {
            $window: window,
            $document: document,
            $global: {}
        };

        this.types = types || {};

    }

    getDirectiveByName(name) {
        if (!this.directives.hasOwnProperty(name))
            throw new UnknownDirectiveError(name);
        return this.directives[name];
    }
    
    getTypeByName(name) {

        if (!this.types.hasOwnProperty(name))
            throw new UnknownTypeError(name);
        return this.types[name];
        
    }

    addGlobal(key, name) {
        this.globalCtx.globals[key] = name;
        return this;
    }

    addType(key, name) {
        this.types[key] = name;
        return this;
    }

    parse(tree, self, cb) {

        this.getDirectiveByName('$parse').apply(tree,
            new Scope(this.globalCtx, {$self: self, $local:{}}, new SymbolParser()), cb);
    }

}

export default Environment