import React from 'react';
import util from '../util';

/**
 * DropDownItem
 */
class DropDownItem extends React.Component {

    render() {
        return util.skipKeys('li', {className:(this.props.disabled)?'disabled':''}, this.props.children);
    }

}

DropDownItem.propTypes = {
  disabled: React.PropTypes.bool
};

export default DropDownItem
