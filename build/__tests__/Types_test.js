'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _Types = require('../Types');

var _Types2 = _interopRequireDefault(_Types);

var _viewPanel = require('../view/Panel');

var _viewPanel2 = _interopRequireDefault(_viewPanel);

var _viewDefinitionList = require('../view/DefinitionList');

var _viewDefinitionList2 = _interopRequireDefault(_viewDefinitionList);

var _formFormGroup = require('../form/FormGroup');

var _formFormGroup2 = _interopRequireDefault(_formFormGroup);

var _formTextArea = require('../form/TextArea');

var _formTextArea2 = _interopRequireDefault(_formTextArea);

var _formSelect = require('../form/Select');

var _formSelect2 = _interopRequireDefault(_formSelect);

var _formRadio = require('../form/Radio');

var _formRadio2 = _interopRequireDefault(_formRadio);

var _formInput = require('../form/Input');

var _formInput2 = _interopRequireDefault(_formInput);

var Test = _reactAddons2['default'].addons.TestUtils;
var processor;

var LameComponent = (function (_React$Component) {
    function LameComponent() {
        _classCallCheck(this, LameComponent);

        if (_React$Component != null) {
            _React$Component.apply(this, arguments);
        }
    }

    _inherits(LameComponent, _React$Component);

    _createClass(LameComponent, [{
        key: 'render',
        value: function render() {
            return _reactAddons2['default'].createElement('input', null);
        }
    }]);

    return LameComponent;
})(_reactAddons2['default'].Component);

describe('Types', function () {

    beforeEach(function () {

        processor = {
            process: jest.genMockFunction().mockImplementation(function () {
                return _reactAddons2['default'].createElement(LameComponent, null);
            }),
            filter: jest.genMockFunction().mockImplementation(function (list, value) {
                return value;
            })
        };
    });

    describe('Types.formgroup', function () {

        it('it should work', function () {

            var ele = _Types2['default'].formgroup({
                label: { value: 'Xyz', className: 'col-md-2' },
                controls: [{ wrapName: 'col-md-5', control: _reactAddons2['default'].createElement('input') }, { wrapName: 'col-md-5', control: [_reactAddons2['default'].createElement('input'), _reactAddons2['default'].createElement('input')] }]
            });

            expect(_reactAddons2['default'].isValidElement(ele)).toBe(true);
            expect(_reactAddons2['default'].renderToStaticMarkup(ele)).toBe('<div class="form-group">' + '<label class="control-label col-md-2">Xyz</label>' + '<div class="col-md-5"><input></div>' + '<div class="col-md-5"><input></div>' + '</div>');
        });
    });

    describe('Types.dl', function () {

        xit('it should work', function () {

            var ele = _Types2['default'].dl({
                labels: [{ label: 'Package', name: 'package' }, { label: 'Plan', name: 'plans.selected' }, { label: 'Option', name: 'options.selected' }]
            }, {
                'package': 'C76',
                place: 'Invalid',
                options: { selected: 'xmas' }

            }, processor);

            expect(Test.isElementOfType(ele, _viewDefinitionList2['default'])).toBe(true);
            expect(_reactAddons2['default'].renderToStaticMarkup(ele)).toBe('<dl class="dl-horizontal"><dt>Package</dt>' + '<dd>C76</dd><dt>Plan</dt><dd></dd><dt>Option</dt>' + '<dd>xmas</dd></dl>');
        });
    });

    describe('Types.textarea', function () {

        xit('it should work', function () {

            var ele = _Types2['default'].textarea({
                name: 'values.area',
                defaultValue: 'The Bull Pen'

            }, processor);

            expect(Test.isElementOfType(ele, _formTextArea2['default'])).toBe(true);
            expect(_reactAddons2['default'].renderToStaticMarkup(ele).replace(/\s/g, '')).toBe(('<textarea class="form-control" ' + 'id="values.area" name="values.area">' + 'The Bull Pen</textarea>').replace(/\s/g, ''));
        });
    });
});