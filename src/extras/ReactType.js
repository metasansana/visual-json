import React from 'react';

/**
 * ReactType
 */
class ReactType {

    constructor(component, types) {
        this.component = component;
        this.types = types;
    }

    _handleSwitch(tree, scope, compiler) {
        tree = scope.applySymbols(tree);
        return compiler.apply(tree.case[tree.value || tree.default], scope);
    }

    toComponent() {

    }

    compile(tree, scope, compiler, index) {

        var childs = null;
        var props = {key: index};

        if (this.component.propTypes)
            for (var key in this.component.propTypes)
                if (this.component.propTypes.hasOwnProperty(key))
                    props[key] = tree[key];

        for (var key in tree)
            if (tree.hasOwnProperty(key)) {

                if (key.substring(0, 2) === '!!')
                    props[key.substring(2)] = compiler.apply(tree[key], scope);

                //Allow un-instantiated components to be swapped
                if (key.substring(0, 2) === '!#')
                    props[key.substring(2)] = this.types[tree[key]]

            }

        if (tree.hasOwnProperty('!if'))
            if (!tree['!if']) return null;

        if (tree.hasOwnProperty('!switch'))
            childs = this._handleSwitch(tree, scope, compiler);

        if (tree.hasOwnProperty('!children'))
            childs = (typeof tree['!children'] === 'object') ?
                compiler.apply(tree['!children'], scope) :
                tree['!children'];


        return React.createElement(this.component, props, childs);

    }

}

export default ReactType