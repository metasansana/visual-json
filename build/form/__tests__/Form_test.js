'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _Form = require('../Form');

var _Form2 = _interopRequireDefault(_Form);

var Test = _reactAddons2['default'].addons.TestUtils;

var Fake = (function (_React$Component) {
    function Fake() {
        _classCallCheck(this, Fake);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(Fake, _React$Component);

    _createClass(Fake, [{
        key: 'render',
        value: function render() {
            return _reactAddons2['default'].createElement(
                'fake',
                null,
                this.props.defaultValue
            );
        }
    }]);

    return Fake;
})(_reactAddons2['default'].Component);

describe('Form', function () {

    describe('Form.render', function () {
        it('it should render the correct markup with children', function () {

            expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(
                _Form2['default'],
                { name: 'name' },
                _reactAddons2['default'].createElement('input', { type: 'datetime' })
            ))).toBe('<form name="name"><input type="datetime"></form>');
        });

        it('it should render the correct markup with elements', function () {

            var processor = {
                process: function process(schema, defaults) {
                    return _reactAddons2['default'].createElement(Fake, null);
                }
            };

            expect(_reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_Form2['default'], { name: 'name', elements: [{ type: 'fake', name: 'one' }, { type: 'fake', name: 'two' }],
                processor: processor }))).toBe('<form name="name"><fake></fake><fake></fake></form>');
        });
    });
});