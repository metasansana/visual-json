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

var _merge = require('merge');

var _merge2 = _interopRequireDefault(_merge);

var _dotAccess = require('dot-access');

var _dotAccess2 = _interopRequireDefault(_dotAccess);

var _Control2 = require('./Control');

var _Control3 = _interopRequireDefault(_Control2);

var Select = (function (_Control) {
    function Select(props) {
        _classCallCheck(this, Select);

        _get(Object.getPrototypeOf(Select.prototype), 'constructor', this).call(this, props);
        this.NATIVE_TYPE = 'select';
    }

    _inherits(Select, _Control);

    _createClass(Select, [{
        key: 'renderComponent',
        value: function renderComponent(props) {
            var blank = props.blank;
            var valueField = props.valueField;
            var labelField = props.labelField;
            var options = props.options;
            var value = props.value;

            options = options.slice().map(function (option, key) {

                var optVal, optLabel;

                if (typeof option === 'object') {
                    optVal = _dotAccess2['default'].get(option, valueField);
                    optLabel = _dotAccess2['default'].get(option, labelField);
                } else {
                    optVal = option;
                    optLabel = option;
                }

                if (optVal === value) props.value = optVal;

                return _react2['default'].createElement('option', { value: optVal, key: key }, optLabel);
            });

            if (blank) options.unshift(_react2['default'].createElement('option', { value: '', disabled: true, key: -1 }, blank));

            return _react2['default'].createElement('select', props, options);
        }
    }]);

    return Select;
})(_Control3['default']);

Select.propTypes = {
    type: _react2['default'].PropTypes.string,
    name: _react2['default'].PropTypes.string.isRequired,
    className: _react2['default'].PropTypes.string,
    multiple: _react2['default'].PropTypes.bool,
    blank: _react2['default'].PropTypes.string,
    valueField: _react2['default'].PropTypes.string,
    labelField: _react2['default'].PropTypes.string,
    options: _react2['default'].PropTypes.oneOfType([_react2['default'].PropTypes.number, _react2['default'].PropTypes.string, _react2['default'].PropTypes.array]),
    value: _react2['default'].PropTypes.any,
    placeholder: _react2['default'].PropTypes.any,
    set: _react2['default'].PropTypes.func,
    onChange: _react2['default'].PropTypes.func,
    onBlur: _react2['default'].PropTypes.func,
    onFocus: _react2['default'].PropTypes.func
};

Select.defaultProps = {
    options: [],
    valueField: 'value',
    labelField: 'label'
};

exports['default'] = Select;
module.exports = exports['default'];