import React from 'react';
import Select from './Select';

class VerticalSelect extends Select {

    renderComponent() {

        return React.createElement('div', {className: 'form-group' + this.state.validationState},
            React.createElement('label', {}, this.props.labelValue),
                Select.prototype.renderComponent.call(this));

    }
}
VerticalSelect.propTypes = {
    name: React.PropTypes.string.isRequired,
    options: React.PropTypes.arrayOf(React.PropTypes.shape({
        label: React.PropTypes.string.isRequired,
        value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]).isRequired
    })).isRequired,
    model: React.PropTypes.object.isRequired
};
export default VerticalSelect;
