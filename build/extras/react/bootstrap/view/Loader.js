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

var _coreTree = require('../../../../core/Tree');

var _coreTree2 = _interopRequireDefault(_coreTree);

/**
 * Loader is used to load remote content.
 */

var Loader = (function (_React$Component) {
    function Loader(props) {
        _classCallCheck(this, Loader);

        _get(Object.getPrototypeOf(Loader.prototype), 'constructor', this).call(this, props);
        this.state = { status: 'loading' };
    }

    _inherits(Loader, _React$Component);

    _createClass(Loader, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            if (this.state.status !== 'loading') this.props.promise().then(function (res) {
                this.props.$scope.set('response', this.props.responseAdapter(res));
                this.setState({ status: 'loaded' });
                return res;
            })['catch'](function (e) {
                this.props.$scope.set('error', this.props.errorAdapter(e));
                this.setState({ status: 'error' });
                return e;
            });
        }
    }, {
        key: 'render',
        value: function render() {

            if (this.state.status === 'loaded') return $environment.parse(new _coreTree2['default'](this.props.loadedView), this.props.$scope);

            if (this.state.status === 'error') return $environment.parse(new _coreTree2['default'](this.props.errorView), this.props.$scope);

            return this.props.children;
        }
    }]);

    return Loader;
})(_react2['default'].Component);

Loader.propTypes = {
    $scope: _react2['default'].propTypes.object,
    $environment: _react2['default'].PropTypes.object,
    responseAdapter: _react2['default'].PropTypes.object,
    errorAdapter: _react2['default'].PropTypes.object,
    promise: _react2['default'].propTypes.func,
    loadedView: _react2['default'].PropTypes.object,
    errorView: _react2['default'].PropTypes.object
};

Loader.defaultProps = {
    responseAdapter: function responseAdapter(res) {
        return res;
    },
    errorAdapter: function errorAdapter(e) {
        return e;
    }
};

exports['default'] = Loader;
module.exports = exports['default'];