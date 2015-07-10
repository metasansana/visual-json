import React from 'react';
import SortStrategy from './SortStrategy';

export default {
    SortStrategy: SortStrategy,
    skipKeys(component, props, children) {
        return React.createElement.apply(null,
            [component, props].concat(children));
    }
}