import React from 'react';
import util from '../util';

/**
 * Column
 */
class Column extends React.Component {

    render() {
        return util.skipKeys('div', {className: this.props.className}, this.props.children);
    }

}

Column.propTypes = {
    className: React.PropTypes.string
};

Column.defaultProps = {
    className: 'col-md-12'
};

export default Column
