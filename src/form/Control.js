import React from 'react';

/**
 * Control
 *
 * Notes: The defaultValue field of a control must not use dot notation. Conversly it
 * is better to use dot notation for name attributes.
 */
class Control extends React.Component {

    constructor(props) {

        super(props);

        var self = this;

        this.callbacks = {
            onChange: this.change.bind(self),
            onBlur: this.blur.bind(self)
            //onFocus: this.focus.bind(self)
        }
    }

    _defaultValue() {

        var fromModel = this.props.model.get(this.props.name);
        var fromProps = this.props.defaultValue;

        if (!fromModel)
            return fromProps;

        return fromModel;

    }

    _defaultProps(o) {

        var self = this;
        var props = self.props.attrs || {};
        var o = o || {};

        var firstMerge = {
            name: self.props.name,
            className: 'form-control',
            model: self.props.model,
            defaultValue: self._defaultValue(),
            onChange: self.change.bind(self),
            onBlur: self.blur.bind(self)
        };

        for (var key in firstMerge)
            if (firstMerge.hasOwnProperty(key)) {
                props[key] = firstMerge[key];
            }

        for (var key in o) {
            if (o.hasOwnProperty(key))
                props[key] = o[key];
        }

        return props;

    }

    change(e) {
        this.props.model.set(e.target.name, e.target.value, this, e.target);
    }

    blur(e) {
        this.props.model.validate(e.target.name, e.target.value, this, e.target);
    }

    renderComponent() {
        return (<b>Not implemented</b>);
    }


    render() {
        return this.renderComponent(this.callbacks);
    }

}
export default Control;
