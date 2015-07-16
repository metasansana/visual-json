'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SortStrategy = require('./SortStrategy');

var _SortStrategy2 = _interopRequireDefault(_SortStrategy);

exports['default'] = {
    SortStrategy: _SortStrategy2['default'],
    skipKeys: function skipKeys(component, props, children) {
        return _react2['default'].createElement.apply(null, [component, props].concat(children));
    },
    transferKeys: function transferKeys(spec, src, dest) {
        Object.keys(spec).forEach(function (key) {
            return dest[key] = src[key];
        });
        return dest;
    }

};
module.exports = exports['default'];