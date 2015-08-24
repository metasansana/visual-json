import Seek from 'property-seek';

/**
 * Scope retains all the variable information during parsing.
 *
 * Directives interact with this class to store and retrieve information.
 * @param {Object} globalCtx
 * @param {Object} localCtx
 * @param {SymbolParser} symbolParser
 */
class Scope {

    constructor(envCtx, localCtx, symbolParser) {
        this.envCtx = envCtx;
        this.localCtx = localCtx;
        this.symbolParser = symbolParser;
    }

    /**
     * clone provides a new Scope with a copy of this one's global and local context.
     * @returns {Scope}
     */
    clone() {
        var newLocal = {};
        for (var key in this.localCtx)
            if (this.localCtx.hasOwnProperty(key))
                newLocal[key] = this.localCtx[key];
        return new Scope(this.envCtx, newLocal, this.symbolParser)
    }


    replaceSelf(self) {
        this.localCtx.$self = self;
        return this;
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
    set(dest, key, value) {
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

        if(!path) path = '$self';

        if(path[0] !== '$')
        path = '$self.'+path;

        if(this.symbolParser.startsWith('$types', path)){
            value = Seek.get(this.envCtx, path);
            return value.getSource();
        }

        value = Seek.get(this.localCtx, path);
        if (value !== undefined) return value;

        value = Seek.get(this.envCtx, path);
        if (value !== undefined) return value;

    }

    applySymbols(tree) {
        return this.symbolParser.parse(tree, this);
    }

}

export default Scope