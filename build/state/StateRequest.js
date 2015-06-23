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

var _jhr = require('jhr');

var _jhr2 = _interopRequireDefault(_jhr);

var _dotAccess = require('dot-access');

var _dotAccess2 = _interopRequireDefault(_dotAccess);

var http = _jhr2['default'].createAgent();

/**
 * StateRequest
 */

var StateRequest = (function (_React$Component) {
    function StateRequest(props) {
        _classCallCheck(this, StateRequest);

        _get(Object.getPrototypeOf(StateRequest.prototype), 'constructor', this).call(this, props);
        this.state = { view: 'load' };
    }

    _inherits(StateRequest, _React$Component);

    _createClass(StateRequest, [{
        key: 'componentDidMount',
        value: function componentDidMount() {

            var self = this;
            var props = this.props;
            var url = props.url;
            var params = props.params;

            if (props.beforeRequest) {
                var ___ = props.beforeRequest(url, params);
                url = ___.url;
                params = ___.params;
            }

            http[self.props.method].call(http, props.$template(this.props.$template(url)), params).then(function (res) {

                var state = {};

                if (props.onSuccess) props.onSuccess(res.data);

                if (props.resultKey) state[props.resultKey] = res.data;

                if (props.successState) state[props.stateKey] = props.successState;

                if (props.content) return self.setState({ view: 'show', data: res.data });

                if (props.parent) props.parent.setState(state);
            })['catch'](function (e) {

                if (!e instanceof _jhr2['default'].HTTPError) throw e;

                var state = {};

                if (props.onError) props.onError(e);

                if (props.errorState) state[props.stateKey] = props.errorState;

                if (props.content) {
                    console.log(e.stack);
                    return self.setState({ view: 'error', data: e });
                }

                if (props.parent) return props.parent.setState(state);
            });
        }
    }, {
        key: 'render',
        value: function render() {

            if (this.state.view === 'load') return _react2['default'].createElement('b', null, this.props.loadLabel || 'Loading...');

            if (this.state.view === 'error') return _react2['default'].createElement('b', null, this.state.data.message);

            var schema = {};
            var content = this.props.content;

            for (var key in content) if (content.hasOwnProperty(key)) schema[key] = content[key];

            schema[this.props.resultKey] = this.state.data;

            return this.props.$parser.parse(schema);
        }
    }]);

    return StateRequest;
})(_react2['default'].Component);

StateRequest.propTypes = {
    $template: _react2['default'].PropTypes.func.isRequired,
    $parser: _react2['default'].PropTypes.object.isRequired,
    loadLabel: _react2['default'].PropTypes.node,
    url: _react2['default'].PropTypes.string.isRequired,
    method: _react2['default'].PropTypes.string.isRequired,
    beforeRequest: _react2['default'].PropTypes.func,
    params: _react2['default'].PropTypes.object,
    parent: _react2['default'].PropTypes.object,
    resultKey: _react2['default'].PropTypes.string,
    onError: _react2['default'].PropTypes.func,
    onSuccess: _react2['default'].PropTypes.func,
    stateKey: _react2['default'].PropTypes.string,
    errorState: _react2['default'].PropTypes.string,
    successState: _react2['default'].PropTypes.string,
    content: _react2['default'].PropTypes.object
};

exports['default'] = StateRequest;
module.exports = exports['default'];