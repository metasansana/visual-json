import React from 'react';
import dot from 'dot-access';
import {SortStrategy} from '../util'
import TableHeadings from './TableHeadings';
import TableRow from './TableRow';

/**
 *  Table
 */
class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data.slice(),
            arrowStates: this.props.columns.map(_=>0),
            allSelected: this.props.allSelected,
            rowsSelected: this.props.data.map(_=>this.props.allSelected)
        };
    }

    rowSelected(key) {

        var newState = {
            rowsSelected: this.state.rowsSelected.slice()
        };

        var datum = this.state.data[key];

        newState.rowsSelected[key] = !newState.rowsSelected[key];

        if(this.state.allSelected)
        newState.allSelected = newState.rowsSelected[key];

        this.setState(newState, function() {

            this.props.onRowSelected(this.props.data.indexOf(datum), datum, this.props.data);

        }.bind(this))

    }

    allSelected() {

        var selected = (this.state.allSelected)? false: true;

        this.setState({
            rowsSelected: this.state.rowsSelected.map(x=>selected),
            allSelected: selected
        }, function(){
            this.props.onAllRowsSelected((selected)?this.props.data:[]);
        }.bind(this));

    }

    /**
     * headingClicked
     * @param {String} name The name of the column clicked
     * @param {String|Function} sort The sort to use
     * @param {Number} arrowState The 'state' the column's arrow is currently in (0-2)
     * @param {Number} columnsKey The original key of the column in the columns prop.
     */
    headingClicked(name, sort, arrowState, columnsKey) {

        var data;
        var rowsSelected = this.state.rowsSelected.map(x=>false);
        var arrowStates = this.state.arrowStates.slice();

        switch (arrowState) {

            case 0: data = this.state.data.slice().sort(
                SortStrategy.getStrategy(sort, name));
                break;
            case 1:
                data = this.state.data.slice().reverse();
                break;
            case 2:
                data = this.state.data.slice().reverse();
                break;
            default:
                break;

        }

        arrowStates[columnsKey] = (arrowState === 2)? 1:arrowState+1;

        this.setState({
            data:data,
            arrowStates:arrowStates,
            rowsSelected:rowsSelected,
            allSelected: false
        });

    }

    render() {

        var {className, selectable, columns} = this.props;

        var headings = React.createElement(TableHeadings, {
            columns: columns,
            onClick: this.headingClicked.bind(this),
            selectable: selectable,
            selected: this.state.allSelected,
            onSelect: this.allSelected.bind(this),
            arrowStates: this.state.arrowStates

        });

        var body = this.state.data.map((datum, key)=> React.createElement(TableRow, {
            data: datum,
            columns: columns,
            key: key,
            arrowStates: this.state.arrowStates,
            selectable: selectable,
            selected: this.state.rowsSelected[key],
            onSelect: this.rowSelected.bind(this, key)
        }));

        return React.createElement('table', {
                className: className
            },
            React.createElement('thead', null, headings),
            React.createElement('tbody', null, body));
    }

}

Table.propTypes = {
    data: React.PropTypes.array,
    selectable: React.PropTypes.bool,
    className: React.PropTypes.string,
    columns: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        headingComponent: React.PropTypes.component,
        headingComponentOptions: React.PropTypes.object,
        dataComponent: React.PropTypes.component,
        dataComponentOptions: React.PropTypes.object,
        transform: React.PropTypes.string,
        sort: React.PropTypes.func,
        hidden: React.PropTypes.bool
    })),
    onRowSelected: React.PropTypes.func,
    onAllRowsSelected: React.PropTypes.func,
    footer: React.PropTypes.arrayOf(React.PropTypes.shape({}))
};

Table.defaultProps = {
    className: 'table table-bordered',
    columns: [],
    data: [],
    selectable: true,
    onRowSelected: function(){},
    onAllRowsSelected: function(){}
};

export default Table;
