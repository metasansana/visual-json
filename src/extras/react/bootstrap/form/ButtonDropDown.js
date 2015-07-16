import React from 'react';
import IconFont from '../view/IconFont';
/**
 * ButtonDropDown
 */
class ButtonDropDown extends React.Component {
    render() {

        var {className, children, buttonContent} = this.props;
        children = Array.isArray(children)? children: [children];

       return React.createElement('div', {className: 'btn-group'},
            React.createElement('button', {
                className: "btn "+className+' dropdown-toggle',
                'data-toggle': "dropdown"
            }, buttonContent),
            React.createElement('ul', {className: 'dropdown-menu'}, ...children));
    }

}

ButtonDropDown.propTypes = {
    className: React.PropTypes.string,
    title: React.PropTypes.string,
    buttonContent: React.PropTypes.node
};

ButtonDropDown.defaultProps = {
    className:"btn-default"
};

export default ButtonDropDown;
