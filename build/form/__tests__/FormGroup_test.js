'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _FormGroup = require('../FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var FakeComponent = (function (_React$Component) {
    function FakeComponent() {
        _classCallCheck(this, FakeComponent);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(FakeComponent, _React$Component);

    _createClass(FakeComponent, [{
        key: 'render',
        value: function render() {
            return _reactAddons2['default'].createElement('input', { value: '#C39212', readOnly: true });
        }
    }]);

    return FakeComponent;
})(_reactAddons2['default'].Component);

describe('FormGroup', function () {

    it('it should render with control wrappers', function () {

        var fakeInstance = _reactAddons2['default'].createElement(FakeComponent);
        var expected = '<div class="form-group"><label class="control-label col-md-2">Xyz</label>' + '<div class="col-md-5"><input value="#C39212" readonly></div>' + '<div class="col-md-5"><input value="#C39212" readonly></div></div>';

        var markup = _reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_FormGroup2['default'], {
            label: { value: 'Xyz', className: 'col-md-2' },
            controls: [{ wrapClass: 'col-md-5', control: fakeInstance }, { wrapClass: 'col-md-5', control: fakeInstance }] }));

        expect(markup).toBe(expected);
    });

    xit('it should render without control wrappers', function () {

        var fakeInstance = _reactAddons2['default'].createElement(FakeComponent);
        var expected = '<div class="form-group"><label class="control-label col-md-2">Xyz</label>' + '<input value="#C39212" readonly><input value="#C39212" readonly></div>';

        var markup = _reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_FormGroup2['default'], {
            label: { value: 'Xyz', className: 'col-md-2' },
            controls: [{ control: fakeInstance }, { control: fakeInstance }] }));

        expect(markup).toBe(expected);
    });
});