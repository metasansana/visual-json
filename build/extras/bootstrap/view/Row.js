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

var _Column = require('./Column');

var _Column2 = _interopRequireDefault(_Column);

/**
 * Row
 */

var Row = (function (_React$Component) {
    function Row() {
        _classCallCheck(this, Row);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Row, _React$Component);

    _createClass(Row, [{
        key: 'render',
        value: function render() {

            var childs = this.props.children;

            if (this.props.hasCols) {

                childs = Array.isArray(childs) ? childs : [childs];

                childs = childs.map((function (child, key) {
                    return _react2['default'].createElement(_Column2['default'], {
                        className: this.props.colClassName,
                        key: key
                    }, child);
                }).bind(this));
            }

            return _react2['default'].createElement('div', { className: 'row' }, childs);
        }
    }]);

    return Row;
})(_react2['default'].Component);

Row.propTypes = {
    hasCols: _react2['default'].PropTypes.bool,
    colClassName: _react2['default'].PropTypes.string
};

Row.defaultProps = {
    wrapInCols: true,
    colClassName: 'col-md-12'
};

exports['default'] = Row;
module.exports = exports['default'];