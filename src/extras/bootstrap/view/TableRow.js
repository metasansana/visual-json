import React from 'react';
import util from '../util';
import classnames from 'classnames';
import DotAccess from 'dot-access';

/**
 * TableRow
 */
class TableRow extends React.Component {

    render() {

        var {selected, selectable, onSelect} = this.props;
        var inflation = (selectable) ? 1 : 0;

        var cells = this.props.columns.map(function (column, key) {

            var datum = DotAccess.get(this.props.data, column.name);

            return React.createElement('td', {key: key + inflation},
                (column.dataComponent) ?
                    React.createElement(column.dataComponent, {
                        data: datum, column: column, options: column.dataComponentOptions
                    }, datum) : datum)
        }.bind(this));

        if (selectable)
            cells.unshift(React.createElement('td', {key: 'haxs0r'},
                React.createElement('input', {
                    type: 'checkbox',
                    checked: selected,
                    onChange: onSelect
                })));

        return React.createElement('tr', {className: classnames({active: selected})}, cells);
    }

}

TableRow.propTypes = {
    data: React.PropTypes.object,
    columns: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        headingComponent: React.PropTypes.component,
        dataComponent: React.PropTypes.component,
        dataComponentOptions: React.PropTypes.object,
        transform: React.PropTypes.string,
        sort: React.PropTypes.func,
        hidden: React.PropTypes.bool
    })).isRequired,
    selectable: React.PropTypes.bool,
    selected: React.PropTypes.bool,
    onSelect: React.PropTypes.func

};

TableRow.defaultProps = {
    data: {},
    onSelect: function () {
    }
};

export default TableRow
