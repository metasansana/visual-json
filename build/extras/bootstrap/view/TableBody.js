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

var _util = require('../util');

var _util2 = _interopRequireDefault(_util);

/**
 * TableBody
 */

var TableBody = (function (_React$Component) {
    function TableBody() {
        _classCallCheck(this, TableBody);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(TableBody, _React$Component);

    _createClass(TableBody, [{
        key: 'render',
        value: function render() {

            return _react2['default'].createElement('');
            return data.map(function (rowData, i) {

                return _react2['default'].createElement('tr', { key: i }, columns.map(function (column, ii) {

                    var cellData;

                    if (column.hidden) return null;

                    if (column.name === '$index') {
                        cellData = i;
                        rowData.index = i;
                    } else {

                        cellData = dot.get(rowData, column.name);

                        if (!cellData) cellData = null;
                    }

                    if (column.filter) cellData = self.props.$parser.filter(cellData, column.filter, rowData);

                    return _react2['default'].createElement('td', { key: ii }, cellData);
                }).filter(function (cell) {
                    return cell;
                }));
            });
        }
    }]);

    return TableBody;
})(_react2['default'].Component);

TableBody.propTypes = {};
exports['default'] = TableBody;
module.exports = exports['default'];