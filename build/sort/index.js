'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _NaturalSort = require('./NaturalSort');

var _NaturalSort2 = _interopRequireDefault(_NaturalSort);

var _DateSort = require('./DateSort');

var _DateSort2 = _interopRequireDefault(_DateSort);

var _StringSort = require('./StringSort');

var _StringSort2 = _interopRequireDefault(_StringSort);

var _NumberSort = require('./NumberSort');

var _NumberSort2 = _interopRequireDefault(_NumberSort);

exports['default'] = {
    StringSort: _StringSort2['default'],
    DateSort: _DateSort2['default'],
    NaturalSort: _NaturalSort2['default'],
    NumberSort: _NumberSort2['default']
};
module.exports = exports['default'];