import React from 'react';
import util from '../util';

const ARROWS = [null, '\u21e9', '\u21e7'];

/**
 * TableHead
 */
class TableHeadings extends React.Component {

    clicked(key) {

        var {name, sort, sortOn } = this.props.columns[key];
        var {arrowStates} = this.props;
        this.props.onClick(name||sortOn, sort, arrowStates[key], key);

    }

    render() {

        var {arrowStates, selectable, onSelect, columns} = this.props;

        columns = columns.map(
            function (column, key) {
                return React.createElement('th',
                    {
                        key: key,
                        onClick: this.clicked.bind(this, key)
                    },
                    (column.headingComponent)?
                        React.createElement(column.headingComponent,
                        {column: column, options:column.headingComponentOptions})
                        : column.label, ARROWS[arrowStates[key]]);
            }.bind(this));

        if (selectable)
            columns.unshift(React.createElement('th', null,
                React.createElement('input', {
                    type: 'checkbox',
                    key:'-1',
                    onChange: onSelect,
                    checked: this.props.selected
                })));

        return React.createElement.apply(React, ['tr', null].concat(columns));

    }

}

TableHeadings.propTypes = {
    arrowState: React.PropTypes.array,
    selectable: React.PropTypes.bool,
    selected: React.PropTypes.bool,
    onSelect: React.PropTypes.func,
    columns: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        headingComponent: React.PropTypes.component,
        cellComponent: React.PropTypes.component,
        transform: React.PropTypes.string,
        sort: React.PropTypes.func,
        hidden: React.PropTypes.bool
    })),
    onClick: React.PropTypes.func

};

TableHeadings.defaultProps = {
    selectable: true,
    onSelect: x=>x
};

export default TableHeadings
