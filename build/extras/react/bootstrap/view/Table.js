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

var _util = require('../util');

var _TableHeadings = require('./TableHeadings');

var _TableHeadings2 = _interopRequireDefault(_TableHeadings);

var _TableRow = require('./TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

/**
 *  Table
 */

var Table = (function (_React$Component) {
    function Table(props) {
        var _this = this;

        _classCallCheck(this, Table);

        _get(Object.getPrototypeOf(Table.prototype), 'constructor', this).call(this, props);
        this.state = {
            data: this.props.data.slice(),
            arrowStates: this.props.columns.map(function (_) {
                return 0;
            }),
            allSelected: this.props.allSelected,
            rowsSelected: this.props.data.map(function (_) {
                return _this.props.allSelected;
            })
        };
    }

    _inherits(Table, _React$Component);

    _createClass(Table, [{
        key: 'rowSelected',
        value: function rowSelected(key) {

            var newState = {
                rowsSelected: this.state.rowsSelected.slice()
            };

            var datum = this.state.data[key];

            newState.rowsSelected[key] = !newState.rowsSelected[key];

            if (this.state.allSelected) newState.allSelected = newState.rowsSelected[key];

            this.setState(newState, (function () {

                this.props.onRowSelected(this.props.data.indexOf(datum), datum, this.props.data);
            }).bind(this));
        }
    }, {
        key: 'allSelected',
        value: function allSelected() {

            var selected = this.state.allSelected ? false : true;

            this.setState({
                rowsSelected: this.state.rowsSelected.map(function (x) {
                    return selected;
                }),
                allSelected: selected
            }, (function () {
                this.props.onAllRowsSelected(selected ? this.props.data : []);
            }).bind(this));
        }
    }, {
        key: 'headingClicked',

        /**
         * headingClicked
         * @param {String} name The name of the column clicked
         * @param {String|Function} sort The sort to use
         * @param {Number} arrowState The 'state' the column's arrow is currently in (0-2)
         * @param {Number} columnsKey The original key of the column in the columns prop.
         */
        value: function headingClicked(name, sort, arrowState, columnsKey) {

            var data;
            var rowsSelected = this.state.rowsSelected.map(function (x) {
                return false;
            });
            var arrowStates = this.state.arrowStates.slice();

            switch (arrowState) {

                case 0:
                    data = this.state.data.slice().sort(_util.SortStrategy.getStrategy(sort, name));
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

            arrowStates[columnsKey] = arrowState === 2 ? 1 : arrowState + 1;

            this.setState({
                data: data,
                arrowStates: arrowStates,
                rowsSelected: rowsSelected,
                allSelected: false
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props;
            var className = _props.className;
            var selectable = _props.selectable;
            var columns = _props.columns;

            var headings = _react2['default'].createElement(_TableHeadings2['default'], {
                columns: columns,
                onClick: this.headingClicked.bind(this),
                selectable: selectable,
                selected: this.state.allSelected,
                onSelect: this.allSelected.bind(this),
                arrowStates: this.state.arrowStates

            });

            var body = this.state.data.map(function (datum, key) {
                return _react2['default'].createElement(_TableRow2['default'], {
                    data: datum,
                    columns: columns,
                    key: key,
                    arrowStates: _this2.state.arrowStates,
                    selectable: selectable,
                    selected: _this2.state.rowsSelected[key],
                    onSelect: _this2.rowSelected.bind(_this2, key)
                });
            });

            return _react2['default'].createElement('table', {
                className: className
            }, _react2['default'].createElement('thead', null, headings), _react2['default'].createElement('tbody', null, body));
        }
    }]);

    return Table;
})(_react2['default'].Component);

Table.propTypes = {
    data: _react2['default'].PropTypes.array,
    selectable: _react2['default'].PropTypes.bool,
    className: _react2['default'].PropTypes.string,
    columns: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
        name: _react2['default'].PropTypes.string.isRequired,
        label: _react2['default'].PropTypes.string.isRequired,
        headingComponent: _react2['default'].PropTypes.component,
        headingComponentOptions: _react2['default'].PropTypes.object,
        dataComponent: _react2['default'].PropTypes.component,
        dataComponentOptions: _react2['default'].PropTypes.object,
        transform: _react2['default'].PropTypes.string,
        sort: _react2['default'].PropTypes.func,
        hidden: _react2['default'].PropTypes.bool
    })),
    onRowSelected: _react2['default'].PropTypes.func,
    onAllRowsSelected: _react2['default'].PropTypes.func,
    footer: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({}))
};

Table.defaultProps = {
    className: 'table table-bordered',
    columns: [],
    data: [],
    selectable: true,
    onRowSelected: function onRowSelected() {},
    onAllRowsSelected: function onAllRowsSelected() {}
};

exports['default'] = Table;
module.exports = exports['default'];