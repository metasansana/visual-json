import React from 'react';

import Control from './Control'

class Option extends React.Component {

    render() {

        return (
            <option value={this.props.value}>
                {this.props.label}
            </option>
        );
    }
}

Option.propTypes = {
    name: React.PropTypes.string.isRequired,
    value: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.number,
    ]).isRequired,
    selected: React.PropTypes.object,
    label: React.PropTypes.string
};


class Select extends Control {

    componentDidMount() {

        if(this.props.defaultValue) {
            React.findDOMNode(this.refs.select).dispatchEvent(new Event('change'));
            console.log('Dispatched! ',React.findDOMNode(this.refs.select));
        }

    }

    renderComponent(callbacks) {




        var self = this;
        return (

            <select ref="select" className="form-control" {...this.props.attrs}
                    onChange={callbacks.onChange}
                    defaultValue={this.props.defaultValue}>
                {
                    self.props.options.map(function (option, i) {

                        return (<Option
                            name={self.props.name}
                            value={option.value}
                            key={i}
                            label={option.label}/>);
                    })
                }
            </select>

        );

    }
}
Select.propTypes = {
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired
    })).isRequired,
    attrs: React.PropTypes.object,
    handler: React.PropTypes.object.isRequired
};
export default Select;
