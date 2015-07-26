'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _RequestPlugin = require('./RequestPlugin');

var _RequestPlugin2 = _interopRequireDefault(_RequestPlugin);

var _SetPlugin = require('./SetPlugin');

var _SetPlugin2 = _interopRequireDefault(_SetPlugin);

exports['default'] = {
    RequestPlugin: _RequestPlugin2['default'],
    SetPlugin: _SetPlugin2['default']
};
module.exports = exports['default'];