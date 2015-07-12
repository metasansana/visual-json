import React from 'react';

class HorizontalControl extends React.Component {

    render() {

        var {labelClassName, labelValue, controlClassName} = this.props;

        return React.createElement('div', {className: 'form-group'},
            React.createElement('label', {className: labelClassName}, labelValue),
            React.createElement('div', {className: controlClassName}, this.props.children));
    }
}

HorizontalControl.propTypes = {
    labelClassName: React.PropTypes.string,
    labelValue: React.PropTypes.string,
    controlClassName: React.PropTypes.string
};

HorizontalControl.defaultProps = {
    labelClassName: 'col-md-4',
    controlClassName: 'col-md-8'
};

HorizontalControl.takeProps = function(component) {
    return ({labelClassName, labelValue, controlClassName} = component);
};

export default HorizontalControl
