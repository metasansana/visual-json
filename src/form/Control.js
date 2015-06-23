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
        }

        this.state = {validationState:''};
    }

    _defaultValue(fromProps) {

        var fromModel = this.props.model.get(this.props.name);
        fromProps = fromProps || this.props.defaultValue;
        var modelIsNotSet;

        if (!fromModel)
            modelIsNotSet = true;

        if (typeof fromModel === 'object')
            if (Object.keys(fromModel).length === 0)
                modelIsNotSet = true;

        if (modelIsNotSet)
            return fromProps;

        return fromModel;

    }

    _defaultProps(o) {

        //@todo needs love https://www.youtube.com/watch?v=NEUX-HYRtUA
        var self = this;
        var props = {};
        var o = o || {};

        if (self.props.attrs)
            for (var key in self.props.attrs)
                if (self.props.attrs.hasOwnProperty(key))
                    props[key] = self.props.attrs[key];

        //copy in unknown props
        for (var key in self.props)
            if (self.props.hasOwnProperty(key))
                props[key] = self.props[key];

        var firstMerge = {
            name: self.props.name,
            className: 'form-control',
            model: self.props.model,
            options: self.props.options,
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

    componentDidMount() {
        this.props.model.set(this.props.name, this._defaultValue(), this);
    }

    change(e) {
        this.props.model.set(this.props.name, e.target.value, this, e.target);
    }

    blur(e) {
        this.props.model.validate(this.props.name, e.target.value, this, e.target);
    }

    renderComponent() {
        return (<b>Not implemented</b>);
    }

    render() {
        return this.renderComponent();
    }

}
export default Control;
