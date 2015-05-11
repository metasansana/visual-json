import React from 'react';
import dot from 'dot-component';

/* Utility functions */
function unshift(val, array) {
    if (!val) return array;
    array.unshift(val);
    return array;
}

function push(val, array) {
    if (!val) return array;
    return array;
}

function compareDate(a, b) {

    return function (name) {

        a = new Date(a[name]).getTime();
        b = new Date(b[name]).getTime();
        return a > b ? -1 : a < b ? 1 : 0;
    }
}

function compare(name) {

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


/* Ende */

/**
 *  Table
 */
class Table extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            data: this.props.data.slice(),
            columns: this.props.columns.slice(),
            shouldReverse: {},
            sortedOn: ''
        }

    }

    headingClicked(name, type) {

        var state = {shouldReverse: this.state.shouldReverse};

        if (type === 'date') {
            state.data = this.state.data.slice().
                sort(compareDate(name));

        } else {

            state.data = this.state.data.slice().
                sort(compare(name));

        }

        if (!state.shouldReverse.hasOwnProperty(name))
            state.shouldReverse[name] = false;

        if (state.shouldReverse[name])
            state.data.reverse();

        state.shouldReverse[name] = !state.shouldReverse[name];
        state.sortedOn = name;

        this.setState(state);

    }

    format(name, datum, fmt, fmtType) {

        var f = (data=>data);

        if (fmt)
            if (fmt[name])
                f = fmt[name];

        if (fmtType)
            f = fmt[fmtType];

        var data = dot.get(datum, name);

        return f(data, datum);
    }

    render() {

        var self = this;
        var cells;

        return (
            <table className={'table ' + this.props.className}>
                <thead>
                <tr>
                    {self.state.columns.map(function (schema, i) {

                        var arrow = '';

                        if (schema.name === self.state.sortedOn) {

                            if (self.state.shouldReverse[schema.name])
                                arrow = '\u21e9';

                            if (!self.state.shouldReverse[schema.name])
                                arrow = '\u21e7';

                        }

                        return (<th key={i} onClick={self.headingClicked.bind(self, schema.name)}>
                            {schema.label + ' ' + arrow}</th>);

                    })}
                </tr>
                </thead>
                <tbody>

                {self.state.data.map(function (datum, i) {

                    cells = self.props.columns.map(function (column, i) {

                        var data = dot.get(datum, column.name);

                        if(column.filter)
                        data = column.filter(data);

                        return (
                            <td key={i}>
                                {data}
                            </td>
                        );

                    });

                    return (<tr key={i}>{cells}</tr>);

                })}
                </tbody>
            </table>
        );
    }
}

Table.propTypes = {
    data: React.PropTypes.array.isRequired,
    columns: React.PropTypes.arrayOf(React.PropTypes.shape({
        name: React.PropTypes.string.isRequired,
        label: React.PropTypes.string.isRequired,
        filter: React.PropTypes.func
    })).isRequired
};

export default Table;
