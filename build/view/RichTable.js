'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Table2 = require('./Table');

var _Table3 = _interopRequireDefault(_Table2);

/**
 * RichTable
 */

var RichTable = (function (_Table) {
    function RichTable() {
        _classCallCheck(this, RichTable);

        if (_Table != null) {
            _Table.apply(this, arguments);
        }
    }

    _inherits(RichTable, _Table);

    _createClass(RichTable, [{
        key: 'initializeData',
        value: function initializeData(data) {

            data = _Table3['default'].prototype.initializeData(data).map((function (rowData, i) {
                rowData.___checkBox = _react2['default'].createElement('input', { type: 'checkbox', onChange: this.rowClicked.bind(this, i) });
                return rowData;
            }).bind(this));

            return data;
        }
    }, {
        key: 'initializeColumns',
        value: function initializeColumns(columns) {

            var box = _react2['default'].createElement('input', { type: 'checkbox', onChange: this.columnClicked.bind(this) });
            columns = _Table3['default'].prototype.initializeColumns(columns);
            columns.unshift({ name: '___checkBox', label: box, nosort: true });
            return columns;
        }
    }, {
        key: 'columnClicked',
        value: function columnClicked() {}
    }, {
        key: 'rowClicked',
        value: function rowClicked(index) {

            var rowIndex = this.state.indexOf(index);
            var crowsClicked = this.state.rowsClicked.slice();

            rowIndex > -1 ? rowsClicked.splice(rowIndex, 1) : rowsClicked.push(index);

            this.setState({ rowsClicked: rowsClicked }, (function () {
                this.props.onRowClicked && this.props.onRowClicked(index, rowsClicked);
            }).bind(this));
        }
    }]);

    return RichTable;
})(_Table3['default']);

RichTable.propTypes = {
    onRowClicked: _react2['default'].PropTypes.func,
    onAllRowsClicked: _react2['default'].PropTypes.func
};

exports['default'] = RichTable;
module.exports = exports['default'];