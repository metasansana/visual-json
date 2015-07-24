import Tree from './Tree';
import Scope from './Scope';
import SymbolParser from './SymbolParser';
import SetDirective from '../directives/SetDirective';
import UnknownTypeError from './UnknownTypeError';
import Compiler from './Compiler';
import Parser from './Parser';

/**
 * Environment
 */
class Environment {

    constructor(types) {

        this.types = types || {};
        this.plugins = [new SetDirective()];
        this.compiler = new Compiler(this);
        this.parser = new Parser(this);
        this.envCtx = {
            $window: window,
            $document: document,
            $env: {}
        };

    }

    addType(key, name) {
        this.types[key] = name;
        return this;
    }

    addVar(key, name) {
        this.envCtx.env[key] = name;
        return this;
    }

    addPlugin(directive) {
        this.plugins.push(directive);
        return this;
    }

    getTypeByName(name) {
        if (!this.types.hasOwnProperty(name))
            throw new UnknownTypeError(name);
        return this.types[name];
    }

    getPlugins() {
        return this.plugins.slice();
    }

    getScope(self, locals) {
        return new Scope(this.envCtx, {$self: self, $local: locals || {}}, new SymbolParser());
    }

    parse(tree, scope) {
        return this.parser.parse(tree, scope);
    }

    parseFromObject(o, scope){
        return this.parser.parse(new Tree(o), scope);
    }

    compile(tree, scope) {
        return this.compiler.compile(tree, scope);
    }

    generate(tree, self, locals) {
        return this.parser.parse(new Tree(tree, null), this.getScope(self, locals));
    }
}

export default Environment