'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

/**
 * ReactType
 */

var ReactType = (function () {
    function ReactType(component, types) {
        _classCallCheck(this, ReactType);

        this.component = component;
        this.types = types;
    }

    _createClass(ReactType, [{
        key: '_handleSwitch',
        value: function _handleSwitch(tree, scope, compiler) {
            tree = scope.applySymbols(tree);
            return compiler.apply(tree['case'][tree.value || tree['default']], scope);
        }
    }, {
        key: 'toComponent',
        value: function toComponent() {}
    }, {
        key: 'compile',
        value: function compile(tree, scope, compiler, index) {

            var childs = null;
            var props = { key: index };

            if (this.component.propTypes) for (var key in this.component.propTypes) if (this.component.propTypes.hasOwnProperty(key)) props[key] = tree[key];

            for (var key in tree) if (tree.hasOwnProperty(key)) {

                if (key.substring(0, 2) === '!!') props[key.substring(2)] = compiler.apply(tree[key], scope);

                //Allow un-instantiated components to be swapped
                if (key.substring(0, 2) === '!#') props[key.substring(2)] = this.types[tree[key]];
            }

            if (tree.hasOwnProperty('!if')) if (!tree['!if']) return null;

            if (tree.hasOwnProperty('!switch')) childs = this._handleSwitch(tree, scope, compiler);

            if (tree.hasOwnProperty('!children')) childs = typeof tree['!children'] === 'object' ? compiler.apply(tree['!children'], scope) : tree['!children'];

            return _react2['default'].createElement(this.component, props, childs);
        }
    }]);

    return ReactType;
})();

exports['default'] = ReactType;
module.exports = exports['default'];