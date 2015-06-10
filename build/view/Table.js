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

var _dotAccess = require('dot-access');

var _dotAccess2 = _interopRequireDefault(_dotAccess);

var compareDate = function compareDate(name) {

    return function (a, b) {
        a = new Date(a[name]).getTime();
        b = new Date(b[name]).getTime();
        return a > b ? -1 : a < b ? 1 : 0;
    };
};

var compare = function compare(name) {

    return function (a, b) {

        var aval = _dotAccess2['default'].get(a, name);
        var bval = _dotAccess2['default'].get(b, name);

        if (typeof aval === 'string') aval = aval.replace(/\s+/, '').toLowerCase();

        if (typeof bval === 'string') bval = bval.replace(/\s+/, '').toLowerCase();

        return aval > bval ? -1 : aval < bval ? 1 : 0;
    };
};

/**
 *  Table
 */

var Table = (function (_React$Component) {
    function Table(props) {
        _classCallCheck(this, Table);

        _get(Object.getPrototypeOf(Table.prototype), 'constructor', this).call(this, props);

        var state = {
            view: '',
            data: this.props.data ? this.props.data : [],
            columns: this.props.columns ? this.props.columns : [],
            sortedOn: '',
            lastSorted: '',
            arrow: ''
        };

        state.columns = state.columns.filter(function (col) {

            if (!col.hidden) return true;
        });

        this.state = state;
    }

    _inherits(Table, _React$Component);

    _createClass(Table, [{
        key: 'headingClicked',
        value: function headingClicked(name, sortAs) {

            var data = this.state.data.slice();
            var state = { data: data };

            //This column was last sorted on this name
            if (this.state.sortedOn === name) {
                state.data.reverse();
                state.lastSortedOn = name;
                state.arrow = '⇧';
            } else if (sortAs === 'date') {
                state.data = state.data.sort(compareDate(name));
                state.sortedOn = name;
                state.arrow = '⇩';
            } else {
                state.data = state.data.sort(compare(name));
                state.lastSortedOn = this.state.sortedOn;
                state.sortedOn = name;
                state.arrow = '⇩';
            }

            this.setState(state);
        }
    }, {
        key: 'render',
        value: function render() {

            var self = this;

            var headings = _react2['default'].createElement('tr', null, self.state.columns.map(function (column, i) {

                return _react2['default'].createElement('th', {
                    onClick: self.headingClicked.bind(self, column.name, column.sortAs),
                    key: i
                }, column.label, self.state.sortedOn === column.name ? self.state.arrow : '');
            }));

            var body = self.state.data.map(function (datum, i) {

                return _react2['default'].createElement('tr', { key: i }, self.state.columns.map(function (column, ii) {

                    var data;

                    if (column.name === '$index') {
                        data = datum.$index || i;
                    } else {

                        data = _dotAccess2['default'].get(datum, column.name);

                        if (!data) data = null;
                    }

                    if (column.filter) data = self.props.$filter(data, column.filter, datum);

                    return _react2['default'].createElement('td', { key: ii }, data);
                }));
            });

            return _react2['default'].createElement('table', {
                className: 'table ' + (self.props.className ? self.props.className : '')
            }, _react2['default'].createElement('thead', null, headings), _react2['default'].createElement('tbody', null, body));
        }
    }]);

    return Table;
})(_react2['default'].Component);

Table.propTypes = {
    $filter: _react2['default'].PropTypes.func,
    data: _react2['default'].PropTypes.array.isRequired,
    columns: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
        name: _react2['default'].PropTypes.string.isRequired,
        label: _react2['default'].PropTypes.string.isRequired,
        filter: _react2['default'].PropTypes.string

    })).isRequired
};

exports['default'] = Table;
module.exports = exports['default'];