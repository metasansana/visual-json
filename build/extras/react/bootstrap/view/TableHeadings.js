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

var ARROWS = [null, '⇩', '⇧'];

/**
 * TableHead
 */

var TableHeadings = (function (_React$Component) {
    function TableHeadings() {
        _classCallCheck(this, TableHeadings);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(TableHeadings, _React$Component);

    _createClass(TableHeadings, [{
        key: 'clicked',
        value: function clicked(key) {
            var _props$columns$key = this.props.columns[key];
            var name = _props$columns$key.name;
            var sort = _props$columns$key.sort;
            var sortOn = _props$columns$key.sortOn;
            var arrowStates = this.props.arrowStates;

            this.props.onClick(name || sortOn, sort, arrowStates[key], key);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props;
            var arrowStates = _props.arrowStates;
            var selectable = _props.selectable;
            var onSelect = _props.onSelect;
            var columns = _props.columns;

            columns = columns.map((function (column, key) {
                return _react2['default'].createElement('th', {
                    key: key,
                    onClick: this.clicked.bind(this, key)
                }, column.headingComponent ? _react2['default'].createElement(column.headingComponent, { column: column, options: column.headingComponentOptions }) : column.label, ARROWS[arrowStates[key]]);
            }).bind(this));

            if (selectable) columns.unshift(_react2['default'].createElement('th', null, _react2['default'].createElement('input', {
                type: 'checkbox',
                key: '-1',
                onChange: onSelect,
                checked: this.props.selected
            })));

            return _react2['default'].createElement.apply(_react2['default'], ['tr', null].concat(columns));
        }
    }]);

    return TableHeadings;
})(_react2['default'].Component);

TableHeadings.propTypes = {
    arrowState: _react2['default'].PropTypes.array,
    selectable: _react2['default'].PropTypes.bool,
    selected: _react2['default'].PropTypes.bool,
    onSelect: _react2['default'].PropTypes.func,
    columns: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
        name: _react2['default'].PropTypes.string.isRequired,
        label: _react2['default'].PropTypes.string.isRequired,
        headingComponent: _react2['default'].PropTypes.component,
        cellComponent: _react2['default'].PropTypes.component,
        transform: _react2['default'].PropTypes.string,
        sort: _react2['default'].PropTypes.func,
        hidden: _react2['default'].PropTypes.bool
    })),
    onClick: _react2['default'].PropTypes.func

};

TableHeadings.defaultProps = {
    selectable: true,
    onSelect: function onSelect(x) {
        return x;
    }
};

exports['default'] = TableHeadings;
module.exports = exports['default'];