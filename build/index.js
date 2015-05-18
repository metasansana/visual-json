'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _Context = require('./Context');

var _Context2 = _interopRequireDefault(_Context);

var _Types = require('./Types');

var _Types2 = _interopRequireDefault(_Types);

var _Filters = require('./Filters');

var _Filters2 = _interopRequireDefault(_Filters);

var _form = require('./form');

var _form2 = _interopRequireDefault(_form);

exports['default'] = {

    forms: _form2['default'],
    getDefaultContext: function getDefaultContext() {

        var ctx = new _Context2['default']();

        return ctx.addFilters(_Filters2['default']).addHandlers({}).addTypes(_Types2['default']);
    },
    getContext: function getContext() {

        return new _Context2['default']();
    }
};
module.exports = exports['default'];