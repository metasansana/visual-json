import DotAccess from 'dot-access';

/**
 * Scope retains all the variable information during parsing.
 *
 * Directives interact with this class to store and retrieve information.
 * @param {Object} globalCtx
 * @param {Object} localCtx
 * @param {SymbolParser} symbolParser
 */
class Scope {

    constructor(globalCtx, localCtx, symbolParser) {
        this.globalCtx = globalCtx;
        this.localCtx = localCtx;
        this.symbolParser = symbolParser;
    }

    /**
     * set puts a value into localCtx.
     *
     * This value will be available to the current parsing stack only.
     * @param dest The directive to store this value (eg : $request, $resource)
     * @param key The key name of this value
     * @param value The value
     * @returns {Scope}
     */
    set(dest, key, value){
        this.localCtx[dest] = this.localCtx[dest] || {};
        this.localCtx[dest][key] = value;
        return this;
    }

    /**
     * resolve turns a path string into a value stored in either localCtx or globalCtx
     * @param path
     * @returns {*|null}
     */
    resolve(path) {

        var value;

        value = DotAccess.get(this.localCtx, path);
        if(value) return value;

        value = DotAccess.get(this.globalCtx, path);
        if(value) return value;

        return null;

    }

    applySymbols(tree) {
        return this.symbolParser.parse(tree, this);
    }

}

export default Scope