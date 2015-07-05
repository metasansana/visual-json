import dot from 'dot-access';

/**
 * SymbolParser is used for populating a tree with
 * keyword symbols.
 */
class SymbolParser {

    constructor() {

        this.SYMBOLS = {
            SWAP: '@',
            STEP: '$->',
            TEMPLATE: '^',
            INVOKE: '()'
        }
    }

    _clean(value) {

        for (var key in this.SYMBOLS)
            if (this.SYMBOLS.hasOwnProperty(key)) {
                if (this.startsWith(this.SYMBOLS[key], value))
                    value = value.replace(this.SYMBOLS[key], '');
            }

        return value;
    }

    endsWith(searchString, subjectString, position) {

        if (position === undefined || position > subjectString.length) {
            position = subjectString.length;
        }
        position -= searchString.length;
        var lastIndex = subjectString.indexOf(searchString, position);
        return lastIndex !== -1 && lastIndex === position;

    }

    startsWith(searchString, str, position) {
        position = position || 0;
        return str.indexOf(searchString, position) === position;
    }

    hasKeySymbol(key) {

        var flag = false;

        for (var sym in this.SYMBOLS)
            if (this.SYMBOLS.hasOwnProperty(sym))
                if (this.startsWith(this.SYMBOLS[sym], key))
                    flag = true;

        return flag;

    }

    applyStep(key, value, scope, newKey, newTree) {

        if (this.startsWith(this.SYMBOLS.STEP, key))
            newTree[newKey] = this.parse(value, scope);

    }

    applySwap(key, value, scope, newKey, newTree) {

        if (this.startsWith(this.SYMBOLS.SWAP, key)) {

            var willInvoke = this.endsWith(this.SYMBOLS.INVOKE, value);

            var target = scope.resolve((willInvoke) ? value.slice(0, this.SYMBOLS.INVOKE.length) : value);

            if (typeof target === 'function') {

                var paths = value.split('.');

                if (paths[0][0] !== '$') {
                    paths.pop();
                    target.bind(scope.resolve(paths.join('.')));
                }

                if (willInvoke) newTree[newKey] = target();

            }

            return newTree[newKey] = target;

        }
    }

    applyTemplate(key, template, scope, newKey, newTree) {

        if (this.startsWith(this.SYMBOLS.TEMPLATE, key))
            newTree[newKey] = template.replace(/\{\{([\w\.\-]*)\}\}/g, function (s, k) {
                return scope.resolve(k);
            });
    }

    parseObjectLike(schema, scope) {

        if (Array.isArray(schema))
            return this.parseArray(schema, scope);

        if (typeof schema === 'object')
            return this.parseObject(schema, scope);

        return schema;
    }

    parseArray(schema, scope) {
        return schema.map(function (scheme, key) {
            if (scheme.type)
                scheme.key = key;
            return this.parse(scheme, scope);
        }.bind(this))
    }

    parseObject(tree, scope) {

        var newTree = {};
        var newKey;

        for (var key in tree)
            if (tree.hasOwnProperty(key)) {

                if(this.hasKeySymbol(key)) {

                    newKey = this._clean(key);
                    this.applyStep(key, tree[key], scope, newKey, newTree);
                    this.applySwap(key, tree[key], scope, newKey, newTree);
                    this.applyTemplate(key, tree[key], scope, newKey, newTree);

                }else {

                    newTree[key] = tree[key];

                }
            }

        return newTree;

    }

    /**
     * @param {Object|Array} tree
     * @param {Scope} scope
     * @returns {*}
     */
    parse(tree, scope) {
        return this.parseObjectLike(tree, scope);
    }

}

export default SymbolParser

