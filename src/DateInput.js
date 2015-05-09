import React from 'react';
import moment from 'moment';

import BlurControl from './BlurControl';


/**
 * DateInput
 */
class DateInput extends BlurControl {

    constructor(props) {

        super(props);

        this.state = {
            display: this.format(this.props.defaultValue)
        };

    }

    format(value) {

        if (!value)
            return '';

        return moment(value).format('ll')
    }

    blur(e) {

            this.props.handler.setValue(this.props.name, e.target.value, this, e);

        this.setState({display: this.format(e.target.value)});
    }

    renderComponent(callbacks) {
        return (
            <div className="input-group">
                <span className="input-group-addon">{this.state.display}</span>
                <input className="form-control" type="date" name={this.props.name}
                    {...this.props.attributes} placeholder="YYYY-MM-DD"
                    {...callbacks}
                       defaultValue={this.format(this.props.defaultValue)}/>
            </div>
        );
    }

}
export default DateInput;
