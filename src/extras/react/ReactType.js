import React from 'react';

/**
 * ReactType
 */
class ReactType {

    constructor(component) {
        this.component = component;
    }

    getSource() {
        return this.component;
    }

    compile(tree, scope, env) {

        var childs = env.parse(tree.getTree('children'), scope.clone()) || [];

        if (this.component.propTypes.$environment)
            tree.set('$environment', env);

        if (this.component.propTypes.$scope)
            tree.set('$scope', scope.clone());

        return React.createElement(this.component, tree.toObject(), ...childs);

    }

}

export default ReactType