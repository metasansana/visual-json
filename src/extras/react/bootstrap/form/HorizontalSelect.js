import React from 'react';
import HorizontalControl from './HorizontalControl';
import Select from './Select';

class HorizontalSelect extends Select {

    renderComponent(props) {
        return React.createElement(HorizontalControl, HorizontalControl.takeProps(props),
            Select.prototype.renderComponent.call(this, props));
    }
}

HorizontalSelect.propTypes = {
    type: React.PropTypes.string,
    name: React.PropTypes.string.isRequired,
    className: React.PropTypes.string,
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
    onFocus: React.PropTypes.func,
    labelClassName: React.PropTypes.string,
    labelValue: React.PropTypes.string,
    controlClassName: React.PropTypes.string
};

HorizontalSelect.defaultProps = {
    options: [],
    valueField: 'value',
    labelField: 'label'
};
export default HorizontalSelect;
