'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _Table = require('../Table');

var _Table2 = _interopRequireDefault(_Table);

describe('Table', function () {

    describe('Table.render()', function () {

        it('should render the correct markup', function () {

            var props = {
                columns: [{ name: 'name', label: 'Name' }, { name: 'age', label: 'Age' }, { name: 'job', label: 'Job' }],
                data: [{ name: 'Lester', age: 18, job: 'None' }, { name: 'Agard', age: 38, job: 'None' }, { name: 'Blake', age: 38, job: 'Steward' }]

            };

            var html = _reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_Table2['default'], props));

            expect(html).toBe('<table class="table "><thead><tr><th>Name</th><th>Age</th><th>Job</th></tr></thead><tbody><tr><td>Lester</td><td>18</td><td>None</td></tr><tr><td>Agard</td><td>38</td><td>None</td></tr><tr><td>Blake</td><td>38</td><td>Steward</td></tr></tbody></table>');
        });

        it('should render with filters', function () {

            var f = function f(value) {
                return 0;
            };

            var props = {
                columns: [{ name: 'name', label: 'Name', filter: f }, { name: 'age', label: 'Age', filter: f }, { name: 'job', label: 'Job', filter: f }],
                data: [{ name: 'Lester', age: 18, job: 'None' }, { name: 'Agard', age: 38, job: 'None' }, { name: 'Blake', age: 38, job: 'Steward' }]

            };

            var html = _reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_Table2['default'], props));

            expect(html).toBe('<table class="table "><thead><tr><th>Name</th><th>Age</th><th>Job</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td></tr></tbody></table>');
        });

        it('should ignore fields not in columns', function () {

            var props = {
                columns: [{ name: 'name', label: 'Name' }],
                data: [{ name: 'Lester', age: 18, job: 'None' }, { name: 'Agard', age: 38, job: 'None' }, { name: 'Blake', age: 38, job: 'Steward' }]

            };

            var html = _reactAddons2['default'].renderToStaticMarkup(_reactAddons2['default'].createElement(_Table2['default'], props));

            expect(html).toBe('<table class="table "><thead><tr><th>Name</th></tr></thead><tbody><tr><td>Lester</td></tr><tr><td>Agard</td></tr><tr><td>Blake</td></tr></tbody></table>');
        });
    });
});