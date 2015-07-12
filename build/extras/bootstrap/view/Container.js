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

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

/**
 * Container
 */

var Container = (function (_React$Component) {
    function Container() {
        _classCallCheck(this, Container);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Container, _React$Component);

    _createClass(Container, [{
        key: 'render',
        value: function render() {
            var _this = this;

            var childs = this.props.children;
            var tag = this.props.tag || 'section';

            if (!Array.isArray(childs)) childs = [childs];

            childs = childs.map(function (ele, key) {
                return _react2['default'].createElement(_Row2['default'], {
                    key: key,
                    hasCols: _this.props.rowsHaveCols,
                    colClassName: _this.props.colClassName
                }, ele);
            });

            return _react2['default'].createElement.apply(null, [tag, { className: this.props.className }].concat(childs));
        }
    }]);

    return Container;
})(_react2['default'].Component);

Container.propTypes = {
    className: _react2['default'].PropTypes.string,
    rowsHaveCols: _react2['default'].PropTypes.bool,
    colClassName: _react2['default'].PropTypes.string
};

Container.defaultProps = {
    className: 'container-fluid',
    rowsHaveCols: true,
    colClassName: 'col-md-12'
};

exports['default'] = Container;
module.exports = exports['default'];