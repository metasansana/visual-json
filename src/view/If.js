import React from 'react';
import is from 'is';

/**
 * If conditionally shows its content
 */
class If extends React.Component {

    render() {

        var ret;

        if(!is.empty(this.props.condition)) {
            ret = this.props.$parser.parse(this.props.then);
        }else{
            ret = this.props.$parser.parse(this.props.else);
        }

        if(!ret) return null;

        if(typeof ret !== 'object')
        ret = React.createElement('span', null, ret);

        return ret;


    }

}

If.propTypes = {
    $parser: React.PropTypes.object.isRequired,
    condition: React.PropTypes.any,
    then: React.PropTypes.any.isRequired,
    else: React.PropTypes.any
};

export default If;
