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
            view: '',
            data: (this.props.data) ? this.props.data.slice() : [],
            columns: this.props.columns.slice(),
            shouldReverse: {},
            sortedOn: ''
        }

    }

    headingClicked(name, type) {

        var state = {shouldReverse: this.state.shouldReverse, view: 'sorting'};
        var self = this;

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

        self.setState(state, function () {
            self.setState({view: '', table: self._makeTable()})
        });

    }

    getArrow(schema) {

        var self = this;
        var arrow = '';

        if (schema.name === self.state.sortedOn) {

            if (self.state.shouldReverse[schema.name])
                arrow = '\u21e9';

            if (!self.state.shouldReverse[schema.name])
                arrow = '\u21e7';

        }

        return arrow;

    }

    _render(tag, props, value) {

        if (!Array.isArray(value))
            value = [value];

        var args = [];

        args.push(tag);
        args.push(props);
        args = args.concat(value);
        return React.createElement.apply(React, args);

    }

    renderTHEAD() {

        var self = this;

        var headings = self.state.columns.map(function (schema) {

            return self._render('th', {
                onClick: self.headingClicked.bind(self, schema.name)
            }, schema.label + '' + self.getArrow(schema));

        });

        if (self.props.appendHeadings)
            headings.push(_render('th', null, self.props.appendHeadings()));

        return self._render('tr', null, headings);

    }

    renderTBODY() {

        var self = this;
        var data;

        return self.state.data.map(function (datum, i) {

            var cells = self.props.columns.map(function (column) {

                data = dot.get(datum, column.name);

                if (column.filter)
                    data = column.filter(data);

                return self._render('td', null, data);

            });

            if (self.props.appendCells)
                cells.push(self._render('td', null, self.props.appendCells(datum)));

            return self._render('tr', null, cells);


        });
    }

    _makeTable() {

        //@todo Optimize, too slow
        var self = this;
        var className = 'table ' + ((self.props.className) ? self.props.className : '');

        return self._render('table', {className: className},
            [self._render('thead', null, self.renderTHEAD()),
                self._render('tbody', null, self.renderTBODY())]);

    }

    componentDidMount() {
        this.setState({view: 'show'});
    }

    render() {

        if (this.state.view === 'sorting')
            return React.createElement('b', null, 'Sorting... Please Wait');

        if (this.state.table)
            return this.state.table;

        return this._makeTable();

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
