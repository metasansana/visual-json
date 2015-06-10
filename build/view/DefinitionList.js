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

var _dotAccess = require('dot-access');

var _dotAccess2 = _interopRequireDefault(_dotAccess);

/**
 *  DefinitionList displays a definition list of the data supplied.
 *
 *  It useful for displaying readonly data rather than disabled input elements.
 */

var DefinitionList = (function (_React$Component) {
    function DefinitionList() {
        _classCallCheck(this, DefinitionList);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(DefinitionList, _React$Component);

    _createClass(DefinitionList, [{
        key: 'render',
        value: function render() {

            var self = this;
            var lists = [];

            var data = this.props.data || {};

            self.props.labels.forEach(function (label, i) {

                lists.push(_react2['default'].createElement(
                    'dt',
                    { key: 'dt-' + i },
                    label.label
                ));

                var value = _dotAccess2['default'].get(data, label.name);

                if (label.filter) value = self.props.$filter(value, label.filter, data);

                lists.push(_react2['default'].createElement(
                    'dd',
                    { key: 'dd-' + i },
                    value
                ));
            });

            return _react2['default'].createElement(
                'dl',
                { className: this.props.className || 'dl-horizontal' },
                lists
            );
        }
    }]);

    return DefinitionList;
})(_react2['default'].Component);

DefinitionList.propTypes = {
    $filter: _react2['default'].PropTypes.func,
    labels: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
        label: _react2['default'].PropTypes.string.isRequired,
        name: _react2['default'].PropTypes.string.isRequired,
        filter: _react2['default'].PropTypes.string
    })).isRequired,
    data: _react2['default'].PropTypes.object

};

exports['default'] = DefinitionList;
module.exports = exports['default'];