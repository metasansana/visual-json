import React from 'react';
import Select from './Select';

class VerticalSelect extends Select {

    renderComponent(props) {

        return React.createElement('div', {className: 'form-group'},
            React.createElement('label', {}, this.props.labelValue),
                Select.prototype.renderComponent.call(this, props));

    }
}

VerticalSelect.propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
    labelValue:React.PropTypes.string,
    multiple: React.PropTypes.bool,
    blank: React.PropTypes.string,
    valueField: React.PropTypes.string,
    labelField: React.PropTypes.string,
    options: React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.string, React.PropTypes.array]),
    value: React.PropTypes.any,
    placeholder: React.PropTypes.any,
    set: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func
};

VerticalSelect.defaultProps = {
    options: [],
    valueField: 'value',
    labelField: 'label'
};
export default VerticalSelect;
