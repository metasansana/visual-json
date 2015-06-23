import React from 'react';
import dot  from 'dot-access';
import Waiter from './Waiter';

/**
 *  Table
 */
class Table extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            data: this.initializeData(this.props.data),
            columns: this.initializeColumns(this.props.columns),
            sortedOn: null,
            arrow:'',
            rowsClicked:[]
        };
    }

    initializeData(data) {
        return JSON.parse(JSON.stringify((data) ? data : []));
    }

    initializeColumns(columns) {
        return JSON.parse(JSON.stringify((columns) ? columns : []));
    }

    headingClicked(i) {

        this.setState(Waiter.sortOnColumnNumber(
            i,
            this.state.sortedOn,
            this.state.arrow,
            this.state.columns,
            this.state.data
            ));
    }

    renderHeadings(columns, sortedOn, arrow) {

        var self = this;
        return React.createElement('tr', null, columns.map(function (column, i) {
            if(column.hidden) return null;
            return React.createElement('th', {
                onClick: (column.nosort)? undefined :self.headingClicked.bind(self, i),
                key: i
            }, column.label, (i === sortedOn) ? arrow : null);

        }));

    }

    renderBody(columns, data) {

        var self = this;

        return data.map(function (rowData, i) {

            return React.createElement('tr', {key: i},
                columns.map(function (column, ii) {

                    var cellData;

                    if(column.hidden) return null;

                    if (column.name === '$index') {
                        cellData = i;
                        rowData.index = i;

                    } else {

                        cellData = dot.get(rowData, column.name);

                        if (!cellData)
                            cellData = null;
                    }

                    if (column.filter)
                        cellData = self.props.$parser.filter(cellData, column.filter, rowData);

                    return React.createElement('td', {key: ii}, cellData);

                }).filter((cell)=>cell));
        });

    }

    render() {

        var state = this.state;
        var headings = this.renderHeadings(state.columns, state.sortedOn, state.arrow);
        var body = this.renderBody(state.columns, state.data);

        return React.createElement('table', {
                className: 'table ' + ((this.props.className) ? this.props.className : '')
            },
            React.createElement('thead', null, headings),
            React.createElement('tbody', null, body));
    }

}

Table.propTypes = {
    $parser: React.PropTypes.object.isRequired,
    $filter: React.PropTypes.func,
    data: React.PropTypes.array.isRequired,
    columns: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        filter: React.PropTypes.string
    })).isRequired
};

export default Table;
