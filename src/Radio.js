import React from 'react';

import Control from './Control'

class Option extends React.Component {

    render() {

        return (
            <div className="radio">
                <label className="radio-inline control-label">
                    <input name={this.props.name} onChange={this.props.onChange}
                           value={this.props.value} type="radio" {...this.props.selected}/>
                    {this.props.label}
                </label>
            </div>
        );
    }
}

Option.propTypes = {
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
    ]).isRequired,
    selected: React.PropTypes.object,
    label: React.PropTypes.string
};


class Radio extends Control {


    renderComponent(callbacks) {

        var self = this;

        return (

            <span>
                {
                    self.props.options.map(function (option, i) {

                        var defalt = self.props.defaultValue;
                        var selected = (defalt)? (option.value === defalt)? {selected:true}:{}:{};

                        return (<Option
                            name={self.props.name}
                            value={option.value}
                            onChange={callbacks.onChange}
                            selected={selected}
                            key={i}
                            label={option.label}/>);
                    })
                }
            </span>

        );

    }
}
Radio.propTypes = {
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired
    })).isRequired,
    handler: React.PropTypes.object.isRequired
};
export default Radio;
