'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * ReactType
 */

var ReactType = (function () {
    function ReactType(component) {
        _classCallCheck(this, ReactType);

        this.component = component;
    }

    _createClass(ReactType, [{
        key: 'getSource',
        value: function getSource() {
            return this.component;
        }
    }, {
        key: 'compile',
        value: function compile(tree, scope, env) {

            var childs = env.parse(tree.getTree('children'), scope.clone()) || [];

            if (this.component.propTypes.$environment) tree.set('$environment', env);

            if (this.component.propTypes.$scope) tree.set('$scope', scope.clone());

            return _react2['default'].createElement.apply(_react2['default'], [this.component, tree.toObject()].concat(_toConsumableArray(childs)));
        }
    }]);

    return ReactType;
})();

exports['default'] = ReactType;
module.exports = exports['default'];