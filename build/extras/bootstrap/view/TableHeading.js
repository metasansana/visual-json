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
 * TableHead
 */

var TableHead = (function (_React$Component) {
    function TableHead() {
        _classCallCheck(this, TableHead);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(TableHead, _React$Component);

    _createClass(TableHead, [{
        key: 'render',
        value: function render() {

            return _react2['default'].createElement('thead', null, _react2['default'].createElement('tr', null, this.props.columns.map(function (column, key) {
                return _react2['default'].createElement('th', { key: key, onClick: this.props.onClick }, column.headingComponent ? _react2['default'].createElement(column.headingComponent, { column: column }) : column.label);
            })));
        }
    }]);

    return TableHead;
})(_react2['default'].Component);

TableHead.propTypes = {
    columns: {
        label: _react2['default'].PropTypes.string,
        headingComponent: _react2['default'].PropTypes.component
    },
    onClick: _react2['default'].PropTypes.func

};

exports['default'] = TableHead;
module.exports = exports['default'];