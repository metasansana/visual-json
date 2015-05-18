'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _dotComponent = require('dot-component');

var _dotComponent2 = _interopRequireDefault(_dotComponent);

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
    };
}

function compare(name) {

    return function (a, b) {

        var aval = _dotComponent2['default'].get(a, name);
        var bval = _dotComponent2['default'].get(b, name);

        if (typeof aval === 'string') aval = aval.replace(/\s+/, '').toLowerCase();

        if (typeof bval === 'string') bval = bval.replace(/\s+/, '').toLowerCase();

        return aval > bval ? -1 : aval < bval ? 1 : 0;
    };
}

/* Ende */

/**
 *  Table
 */

var Table = (function (_React$Component) {
    function Table(props) {
        _classCallCheck(this, Table);

        _get(Object.getPrototypeOf(Table.prototype), 'constructor', this).call(this, props);

        this.state = {
            view: '',
            data: this.props.data ? this.props.data.slice() : [],
            columns: this.props.columns.slice(),
            shouldReverse: {},
            sortedOn: ''
        };
    }

    _inherits(Table, _React$Component);

    _createClass(Table, [{
        key: 'headingClicked',
        value: function headingClicked(name, type) {

            var state = { shouldReverse: this.state.shouldReverse, view: 'sorting' };
            var self = this;

            if (type === 'date') {
                state.data = this.state.data.slice().sort(compareDate(name));
            } else {

                state.data = this.state.data.slice().sort(compare(name));
            }

            if (!state.shouldReverse.hasOwnProperty(name)) state.shouldReverse[name] = false;

            if (state.shouldReverse[name]) state.data.reverse();

            state.shouldReverse[name] = !state.shouldReverse[name];
            state.sortedOn = name;

            self.setState(state, function () {
                self.setState({ view: '', table: self._makeTable() });
            });
        }
    }, {
        key: 'getArrow',
        value: function getArrow(schema) {

            var self = this;
            var arrow = '';

            if (schema.name === self.state.sortedOn) {

                if (self.state.shouldReverse[schema.name]) arrow = '⇩';

                if (!self.state.shouldReverse[schema.name]) arrow = '⇧';
            }

            return arrow;
        }
    }, {
        key: '_render',
        value: function _render(tag, props, value) {

            if (!Array.isArray(value)) value = [value];

            var args = [];

            args.push(tag);
            args.push(props);
            args = args.concat(value);
            return _react2['default'].createElement.apply(_react2['default'], args);
        }
    }, {
        key: 'renderTHEAD',
        value: function renderTHEAD() {

            var self = this;

            var headings = self.state.columns.map(function (schema) {

                return self._render('th', {
                    onClick: self.headingClicked.bind(self, schema.name)
                }, schema.label + '' + self.getArrow(schema));
            });

            if (self.props.appendHeadings) headings.push(_render('th', null, self.props.appendHeadings()));

            return self._render('tr', null, headings);
        }
    }, {
        key: 'renderTBODY',
        value: function renderTBODY() {

            var self = this;
            var data;

            return self.state.data.map(function (datum, i) {

                var cells = self.props.columns.map(function (column) {

                    data = _dotComponent2['default'].get(datum, column.name);

                    if (column.filter) data = column.filter(data);

                    return self._render('td', null, data);
                });

                if (self.props.appendCells) cells.push(self._render('td', null, self.props.appendCells(datum)));

                return self._render('tr', null, cells);
            });
        }
    }, {
        key: '_makeTable',
        value: function _makeTable() {

            //@todo Optimize, too slow
            var self = this;
            var className = 'table ' + (self.props.className ? self.props.className : '');

            return self._render('table', { className: className }, [self._render('thead', null, self.renderTHEAD()), self._render('tbody', null, self.renderTBODY())]);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ view: 'show' });
        }
    }, {
        key: 'render',
        value: function render() {

            if (this.state.view === 'sorting') return _react2['default'].createElement('b', null, 'Sorting... Please Wait');

            if (this.state.table) return this.state.table;

            return this._makeTable();
        }
    }]);

    return Table;
})(_react2['default'].Component);

Table.propTypes = {
    data: _react2['default'].PropTypes.array.isRequired,
    columns: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
        name: _react2['default'].PropTypes.string.isRequired,
        label: _react2['default'].PropTypes.string.isRequired,
        filter: _react2['default'].PropTypes.func
    })).isRequired,
    appendCells: _react2['default'].PropTypes.func,
    appendHeadings: _react2['default'].PropTypes.func
};

exports['default'] = Table;
module.exports = exports['default'];