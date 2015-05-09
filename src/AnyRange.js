import React from 'react';
import dot from 'dot-component';

import Control from './Control';

/**
 * Anyrange displays two inputs side by side.
 */
class Anyrange extends Control {

    renderComponent(callbacks) {

        var lower = this.props.lower;
        var upper = this.props.upper;

        lower.size = lower.size || 4;
        upper.size = upper.size || 4;

        return (
            <span>
                <div className={"col-md-"+lower.size}>
                    <input ref={lower.name} name={lower.name} className="form-control"
                           defaultValue={(this.props.defaultValue) ?
                           dot.get(this.props.defaultValue, lower.name): null} {...lower.attrs}
                           type={lower.type} {...callbacks}/>
                </div>
                <div className={"col-md-"+upper.size}>
                    <input ref={upper.name} name={upper.name} className="form-control"
                           defaultValue={(this.props.defaultValue) ?
                           dot.get(this.props.defaultValue, upper.name): null} {...upper.attrs}
                           type={upper.type} {...callbacks}/>
                </div>
            </span>
        );

    }


}

Anyrange.isPreWrapped = true;

Anyrange.propTypes = {
    handler: React.PropTypes.object.isRequired,
    defaultValue: React.PropTypes.object,
    lower: React.PropTypes.shape({
        name:React.PropTypes.string.isRequired,
        type:React.PropTypes.string.isRequired,
        attrs:React.PropTypes.object
    }).isRequired,
    upper: React.PropTypes.shape({
        name:React.PropTypes.string.isRequired,
        type:React.PropTypes.string.isRequired,
        size: React.PropTypes.number,
        attrs:React.PropTypes.object
    }).isRequired
};

export default Anyrange;
