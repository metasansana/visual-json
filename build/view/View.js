"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

/**
 * View
 */

var View = (function (_React$Component) {
    function View() {
        _classCallCheck(this, View);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(View, _React$Component);

    _createClass(View, [{
        key: "render",
        value: function render() {

            if (Array.isArray(this.props.content)) {
                if (this.props.content.length === 1) return this.props.content[0];

                return _react2["default"].createElement(
                    "span",
                    { className: "IGNORED_WRAPPER_FOR_REACT" },
                    this.props.content.map(function (c, i) {
                        return _react2["default"].createElement(
                            "span",
                            { className: "IGNORED_WRAPPER_FOR_REACT_KEYS", key: i },
                            c
                        );
                    })
                );
            }
            return this.props.content;
        }
    }]);

    return View;
})(_react2["default"].Component);

View.propTypes = {
    content: _react2["default"].PropTypes.node.isRequired
};
exports["default"] = View;
module.exports = exports["default"];