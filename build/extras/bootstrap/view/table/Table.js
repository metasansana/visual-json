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

var _Waiter = require('./Waiter');

var _Waiter2 = _interopRequireDefault(_Waiter);

/**
 *  Table
 */

var Table = (function (_React$Component) {
    function Table(props) {
        _classCallCheck(this, Table);

        _get(Object.getPrototypeOf(Table.prototype), 'constructor', this).call(this, props);
        this.state = {
            data: this.initializeData(this.props.data),
            columns: this.initializeColumns(this.props.columns),
            sortedOn: null,
            arrow: '',
            rowsSelected: []
        };
    }

    _inherits(Table, _React$Component);

    _createClass(Table, [{
        key: 'initializeData',
        value: function initializeData(data) {
            return JSON.parse(JSON.stringify(data ? data : []));
        }
    }, {
        key: 'initializeColumns',
        value: function initializeColumns(columns) {
            return JSON.parse(JSON.stringify(columns ? columns : []));
        }
    }, {
        key: 'headingClicked',
        value: function headingClicked(i) {

            this.setState(_Waiter2['default'].sortOnColumnNumber(i, this.state.sortedOn, this.state.arrow, this.state.columns, this.state.data));
        }
    }, {
        key: 'renderHeadings',
        value: function renderHeadings(columns, sortedOn, arrow) {

            var self = this;
            return _react2['default'].createElement('tr', null, columns.map(function (column, i) {
                if (column.hidden) return null;
                return _react2['default'].createElement('th', {
                    onClick: column.nosort ? undefined : self.headingClicked.bind(self, i),
                    key: i
                }, column.label, i === sortedOn ? arrow : null);
            }));
        }
    }, {
        key: 'renderBody',
        value: function renderBody(columns, data) {

            var self = this;

            return data.map(function (rowData, i) {

                return _react2['default'].createElement('tr', { key: i }, columns.map(function (column, ii) {

                    var cellData;

                    if (column.hidden) return null;

                    if (column.name === '$index') {
                        cellData = i;
                        rowData.index = i;
                    } else {

                        cellData = _dotAccess2['default'].get(rowData, column.name);

                        if (!cellData) cellData = null;
                    }

                    if (column.filter) cellData = self.props.$parser.filter(cellData, column.filter, rowData);

                    return _react2['default'].createElement('td', { key: ii }, cellData);
                }).filter(function (cell) {
                    return cell;
                }));
            });
        }
    }, {
        key: 'render',
        value: function render() {

            var state = this.state;
            var headings = this.renderHeadings(state.columns, state.sortedOn, state.arrow);
            var body = this.renderBody(state.columns, state.data);

            return _react2['default'].createElement('table', {
                className: 'table ' + (this.props.className ? this.props.className : '')
            }, _react2['default'].createElement('thead', null, headings), _react2['default'].createElement('tbody', null, body));
        }
    }]);

    return Table;
})(_react2['default'].Component);

Table.propTypes = {
    data: _react2['default'].PropTypes.array.isRequired,
    columns: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
        name: _react2['default'].PropTypes.string.isRequired,
        label: _react2['default'].PropTypes.string.isRequired,
        filter: _react2['default'].PropTypes.string
    })).isRequired
};

exports['default'] = Table;
module.exports = exports['default'];