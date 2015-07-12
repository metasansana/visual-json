import React from 'react';
import util from '../util';

/**
 * HorizontalGroup
 */
class HorizontalGroup extends React.Component {

    render() {

        var {className, labelValue, children} = this.props;

        var label = React.createElement('label', {
            className: className
        }, labelValue);

        return util.skipKeys('div', {className:'form-group'}, [label].concat(children));
    }


}

HorizontalGroup.propTypes = {
    className: React.PropTypes.string,
    labelValue: React.PropTypes.string
};

HorizontalGroup.defaultProps = {
  className: "control-label col-md-4"
};

export default HorizontalGroup

