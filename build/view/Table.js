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

var _dotComponent = require('dot-component');

var _dotComponent2 = _interopRequireDefault(_dotComponent);

/* Utility functions */
function unshift(val, array) {
    if (!val) return array;
    array.unshift(val);
    return array;
}

function push(val, array) {
    if (!val) return array;
    return array;
}

function compareDate(a, b) {

    return function (name) {

        a = new Date(a[name]).getTime();
        b = new Date(b[name]).getTime();
        return a > b ? -1 : a < b ? 1 : 0;
    };
}

function compare(name) {

    return function (a, b) {

        var aval = _dotComponent2['default'].get(a, name);
        var bval = _dotComponent2['default'].get(b, name);

        if (typeof aval === 'string') aval = aval.replace(/\s+/, '').toLowerCase();

        if (typeof bval === 'string') bval = bval.replace(/\s+/, '').toLowerCase();

        return aval > bval ? -1 : aval < bval ? 1 : 0;
    };
}

/* Ende */

/**
 *  Table
 */

var Table = (function (_React$Component) {
    function Table(props) {
        _classCallCheck(this, Table);

        _get(Object.getPrototypeOf(Table.prototype), 'constructor', this).call(this, props);

        this.state = {
            data: this.props.data.slice(),
            columns: this.props.columns.slice(),
            shouldReverse: {},
            sortedOn: ''
        };
    }

    _inherits(Table, _React$Component);

    _createClass(Table, [{
        key: 'headingClicked',
        value: function headingClicked(name, type) {

            var state = { shouldReverse: this.state.shouldReverse };

            if (type === 'date') {
                state.data = this.state.data.slice().sort(compareDate(name));
            } else {

                state.data = this.state.data.slice().sort(compare(name));
            }

            if (!state.shouldReverse.hasOwnProperty(name)) state.shouldReverse[name] = false;

            if (state.shouldReverse[name]) state.data.reverse();

            state.shouldReverse[name] = !state.shouldReverse[name];
            state.sortedOn = name;

            this.setState(state);
        }
    }, {
        key: 'format',
        value: function format(name, datum, fmt, fmtType) {

            var f = function f(data) {
                return data;
            };

            if (fmt) if (fmt[name]) f = fmt[name];

            if (fmtType) f = fmt[fmtType];

            var data = _dotComponent2['default'].get(datum, name);

            return f(data, datum);
        }
    }, {
        key: 'render',
        value: function render() {

            var self = this;
            var cells;

            return _react2['default'].createElement(
                'table',
                { className: 'table ' + this.props.className },
                _react2['default'].createElement(
                    'thead',
                    null,
                    _react2['default'].createElement(
                        'tr',
                        null,
                        self.state.columns.map(function (schema, i) {

                            var arrow = '';

                            if (schema.name === self.state.sortedOn) {

                                if (self.state.shouldReverse[schema.name]) arrow = '⇩';

                                if (!self.state.shouldReverse[schema.name]) arrow = '⇧';
                            }

                            return _react2['default'].createElement(
                                'th',
                                { key: i, onClick: self.headingClicked.bind(self, schema.name) },
                                schema.label + ' ' + arrow
                            );
                        })
                    )
                ),
                _react2['default'].createElement(
                    'tbody',
                    null,
                    self.state.data.map(function (datum, i) {

                        cells = self.props.columns.map(function (column, i) {

                            var data = _dotComponent2['default'].get(datum, column.name);

                            if (column.filter) data = column.filter(data);

                            return _react2['default'].createElement(
                                'td',
                                { key: i },
                                data
                            );
                        });

                        return _react2['default'].createElement(
                            'tr',
                            { key: i },
                            cells
                        );
                    })
                )
            );
        }
    }]);

    return Table;
})(_react2['default'].Component);

Table.propTypes = {
    data: _react2['default'].PropTypes.array.isRequired,
    columns: _react2['default'].PropTypes.arrayOf(_react2['default'].PropTypes.shape({
        name: _react2['default'].PropTypes.string.isRequired,
        label: _react2['default'].PropTypes.string.isRequired,
        filter: _react2['default'].PropTypes.func
    })).isRequired
};

exports['default'] = Table;
module.exports = exports['default'];