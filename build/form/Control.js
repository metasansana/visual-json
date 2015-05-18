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

/**
 * Control
 *
 * Notes: The defaultValue field of a control must not use dot notation. Conversly it
 * is better to use dot notation for name attributes.
 */

var Control = (function (_React$Component) {
    function Control(props) {
        _classCallCheck(this, Control);

        _get(Object.getPrototypeOf(Control.prototype), 'constructor', this).call(this, props);

        var self = this;

        this.callbacks = {
            onChange: this.change.bind(self),
            onBlur: this.blur.bind(self)
        };

        this.state = {};
    }

    _inherits(Control, _React$Component);

    _createClass(Control, [{
        key: '_defaultValue',
        value: function _defaultValue(fromProps) {

            var fromModel = this.props.model.get(this.props.name);
            fromProps = fromProps || this.props.defaultValue;
            var modelIsNotSet;

            if (!fromModel) modelIsNotSet = true;

            if (typeof fromModel === 'object') if (Object.keys(fromModel).length === 0) modelIsNotSet = true;

            if (modelIsNotSet) return fromProps;

            return fromModel;
        }
    }, {
        key: '_defaultProps',
        value: function _defaultProps(o) {

            //@todo needs love https://www.youtube.com/watch?v=NEUX-HYRtUA
            var self = this;
            var props = {};
            var o = o || {};

            if (self.props.attrs) for (var key in self.props.attrs) if (self.props.attrs.hasOwnProperty(key)) props[key] = self.props.attrs[key];

            //copy in unknown props
            for (var key in self.props) if (self.props.hasOwnProperty(key)) props[key] = self.props[key];

            var firstMerge = {
                name: self.props.name,
                className: 'form-control',
                model: self.props.model,
                options: self.props.options,
                defaultValue: self._defaultValue(),
                onChange: self.change.bind(self),
                onBlur: self.blur.bind(self)
            };

            for (var key in firstMerge) if (firstMerge.hasOwnProperty(key)) {
                props[key] = firstMerge[key];
            }

            for (var key in o) {
                if (o.hasOwnProperty(key)) props[key] = o[key];
            }

            return props;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.model.set(this.props.name, this._defaultValue(), this);
        }
    }, {
        key: 'change',
        value: function change(e) {
            this.props.model.set(this.props.name, e.target.value, this, e.target);
        }
    }, {
        key: 'blur',
        value: function blur(e) {
            this.props.model.validate(this.props.name, e.target.value, this, e.target);
        }
    }, {
        key: 'renderComponent',
        value: function renderComponent() {
            return _react2['default'].createElement(
                'b',
                null,
                'Not implemented'
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return this.renderComponent(this.callbacks);
        }
    }]);

    return Control;
})(_react2['default'].Component);

exports['default'] = Control;
module.exports = exports['default'];