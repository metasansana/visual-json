import React from 'react';
import dot from 'dot-component';

var compareDate = function(name) {

    return  function(a, b){
        a = new Date(a[name]).getTime();
        b = new Date(b[name]).getTime();
        return a > b ? -1 : a < b ? 1 : 0;
    }
}

var compare = function (name) {

    return function (a, b) {

        var aval = dot.get(a, name);
        var bval = dot.get(b, name);

        if (typeof aval === 'string')
            aval = aval.replace(/\s+/, '').toLowerCase();

        if (typeof bval === 'string')
            bval = bval.replace(/\s+/, '').toLowerCase();

        return (aval > bval) ? -1 : (aval < bval) ? 1 : 0;
    }
}

/**
 *  Table
 */
class Table extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            view: '',
            data: (this.props.data) ? this.props.data : [],
            columns: (this.props.columns) ? this.props.columns : [],
            sortedOn: '',
            lastSorted: '',
            arrow: ''
        }

    }

    headingClicked(name, sortAs) {

        var data = this.state.data.slice();
        var state = {data: data};

        //This column was last sorted on this name
            if (this.state.sortedOn === name) {
                state.data.reverse();
                state.lastSortedOn = name;
                state.arrow = '\u21e7';

            } else if (sortAs === 'date') {
                state.data = state.data.sort(compareDate(name));
                state.sortedOn = name;
                state.arrow = '\u21e9';
            } else {
                state.data = state.data.sort(compare(name));
                state.lastSortedOn = this.state.sortedOn;
                state.sortedOn = name;
                state.arrow = '\u21e9';
            }

            this.setState(state);

    }

    render() {

        var self = this;

        var headings = React.createElement('tr', null, self.state.columns.map(function (column, i) {

            return React.createElement('th', {
                onClick: self.headingClicked.bind(self, column.name, column.sortAs),
                key: i
            }, column.label, (self.state.sortedOn === column.name)? self.state.arrow: '');

        }));

        var body = self.state.data.map(function (datum, i) {

            return React.createElement('tr', {key: i},
                self.state.columns.map(function (column, ii) {

                    var data = dot.get(datum, column.name);

                    if (!data)
                        data = null;

                    if (typeof data === 'object')
                        data = data.toString();

                    if (column.filter)
                        data = column.filter(data, datum);

                    return React.createElement('td', {key: ii}, data);

                }));

        });

        return React.createElement('table', {
                className: 'table ' + ((self.props.className) ? self.props.className : '')
            },
            React.createElement('thead', null, headings),
            React.createElement('tbody', null, body));


    }

}

Table.propTypes = {
    data: React.PropTypes.array.isRequired,
    columns: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        filter: React.PropTypes.func
    })).isRequired,
    appendCells: React.PropTypes.func,
    appendHeadings: React.PropTypes.func
};

export default Table;
