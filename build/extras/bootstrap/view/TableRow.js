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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _dotAccess = require('dot-access');

var _dotAccess2 = _interopRequireDefault(_dotAccess);

/**
 * TableRow
 */

var TableRow = (function (_React$Component) {
    function TableRow() {
        _classCallCheck(this, TableRow);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(TableRow, _React$Component);

    _createClass(TableRow, [{
        key: 'render',
        value: function render() {
            var _props = this.props;
            var selected = _props.selected;
            var selectable = _props.selectable;
            var onSelect = _props.onSelect;

            var inflation = selectable ? 1 : 0;

            var cells = this.props.columns.map((function (column, key) {

                var datum = _dotAccess2['default'].get(this.props.data, column.name);

                return _react2['default'].createElement('td', { key: key + inflation }, column.dataComponent ? _react2['default'].createElement(column.dataComponent, {
                    data: datum, column: column, index: key, options: column.dataComponentOptions
                }, datum) : datum);
            }).bind(this));

            if (selectable) cells.unshift(_react2['default'].createElement('td', { key: 'haxs0r' }, _react2['default'].createElement('input', {
                type: 'checkbox',
                checked: selected,
                onChange: onSelect
            })));

            return _react2['default'].createElement('tr', { className: (0, _classnames2['default'])({ active: selected }) }, cells);
        }
    }]);

    return TableRow;
})(_react2['default'].Component);

TableRow.propTypes = {
    data: _react2['default'].PropTypes.object,
    columns: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
        name: _react2['default'].PropTypes.string.isRequired,
        label: _react2['default'].PropTypes.string.isRequired,
        headingComponent: _react2['default'].PropTypes.component,
        headingComponentOptions: _react2['default'].PropTypes.component,
        dataComponent: _react2['default'].PropTypes.component,
        dataComponentOptions: _react2['default'].PropTypes.object,
        transform: _react2['default'].PropTypes.string,
        sort: _react2['default'].PropTypes.func,
        hidden: _react2['default'].PropTypes.bool
    })).isRequired,
    selectable: _react2['default'].PropTypes.bool,
    selected: _react2['default'].PropTypes.bool,
    onSelect: _react2['default'].PropTypes.func

};

TableRow.defaultProps = {
    data: {},
    onSelect: function onSelect() {}
};

exports['default'] = TableRow;
module.exports = exports['default'];