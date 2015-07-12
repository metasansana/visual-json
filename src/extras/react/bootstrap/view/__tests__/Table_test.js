import React from 'react/addons';
import Table from '../Table';

var Test = React.addons.TestUtils;

describe('Table', function () {

    describe('Table.render()', function () {

        it('should render the correct markup', function () {

            var props = {
                columns: [
                    {name: 'name', label: 'Name'},
                    {name: 'age', label: 'Age'},
                    {name: 'job', label: 'Job'}

                ],
                data: [
                    {name: 'Lester', age: 18, job: 'None'},
                    {name: 'Agard', age: 38, job: 'None'},
                    {name: 'Blake', age: 38, job: 'Steward'}
                ]

            };

            var html = React.renderToStaticMarkup(React.createElement(Table, props));

            expect(html).toBe('<table class="table table-bordered"><thead><tr><th>Name</th><th>Age</th><th>Job</th></tr></thead><tbody><tr><td>Lester</td><td>18</td><td>None</td></tr><tr><td>Agard</td><td>38</td><td>None</td></tr><tr><td>Blake</td><td>38</td><td>Steward</td></tr></tbody></table>');

        });

        xit('should render with filters', function () {

            var f = function () {
                return 0;
            };

            var props = {
                columns: [
                    {name: 'name', label: 'Name', filter: f},
                    {name: 'age', label: 'Age', filter: f},
                    {name: 'job', label: 'Job', filter: f}

                ],
                data: [
                    {name: 'Lester', age: 18, job: 'None'},
                    {name: 'Agard', age: 38, job: 'None'},
                    {name: 'Blake', age: 38, job: 'Steward'}
                ]

            };

            var html = React.renderToStaticMarkup(React.createElement(Table, props));

            expect(html).toBe('<table class="table "><thead><tr><th>Name</th><th>Age</th><th>Job</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td></tr></tbody></table>');

        });

        xit('should ignore fields not in columns', function () {

            var props = {
                columns: [
                    {name: 'name', label: 'Name'}
                ],
                data: [
                    {name: 'Lester', age: 18, job: 'None'},
                    {name: 'Agard', age: 38, job: 'None'},
                    {name: 'Blake', age: 38, job: 'Steward'}
                ]

            };

            var html = React.renderToStaticMarkup(React.createElement(Table, props));

            expect(html.replace(/(data-reactid=")([a-zA-Z0-9:;\.\s\(\)\-\,]*)(")/gi, '')).toBe('<table class="table "><thead><tr><th>Name</th></tr></thead><tbody><tr><td>Lester</td></tr><tr><td>Agard</td></tr><tr><td>Blake</td></tr></tbody></table>');

        });

        xit('should sort on heading click', function () {

            var props = {
                columns: [
                    {name: 'name', label: 'Name'},
                    {name: 'age', label: 'Age'},
                    {name: 'date', label: 'Date', sortAs: 'date'}
                ],
                data: [
                    {name: 'D', age: 1, date: new Date('01/01/2001')},
                    {name: 'A', age: 3, date: new Date('01/01/2009')},
                    {name: 'C', age: 1, date: new Date('03/08/2001')},
                    {name: 'B', age: 7, date: new Date('07/24/1902')}
                ]

            };

            //var elm = React.createElement(Table, props);
            //var table = Test.renderIntoDocument(elm);
            //var node = Test.findRenderedDOMComponentWithTag(table, 'table').getDOMNode();
            //var cells = node.rowsSelected[0].cells;

            //Test.Simulate.click(cells[0]);
            //expect(node.innerHTML).toEqual('<thead data-reactid=".0.0"><tr data-reactid=".0.0.0"><th data-reactid=".0.0.0.$0"><span data-reactid=".0.0.0.$0.0">Name</span><span data-reactid=".0.0.0.$0.1">⇩</span></th><th data-reactid=".0.0.0.$1"><span data-reactid=".0.0.0.$1.0">Age</span><span data-reactid=".0.0.0.$1.1"></span></th><th data-reactid=".0.0.0.$2"><span data-reactid=".0.0.0.$2.0">Date</span><span data-reactid=".0.0.0.$2.1"></span></th></tr></thead><tbody data-reactid=".0.1"><tr data-reactid=".0.1.$0"><td data-reactid=".0.1.$0.$0">D</td><td data-reactid=".0.1.$0.$1">1</td><td data-reactid=".0.1.$0.$2">Mon Jan 01 2001 00:00:00 GMT-0400 (AST)</td></tr><tr data-reactid=".0.1.$1"><td data-reactid=".0.1.$1.$0">C</td><td data-reactid=".0.1.$1.$1">1</td><td data-reactid=".0.1.$1.$2">Thu Mar 08 2001 00:00:00 GMT-0400 (AST)</td></tr><tr data-reactid=".0.1.$2"><td data-reactid=".0.1.$2.$0">B</td><td data-reactid=".0.1.$2.$1">7</td><td data-reactid=".0.1.$2.$2">Thu Jul 24 1902 00:00:00 GMT-0400 (AST)</td></tr><tr data-reactid=".0.1.$3"><td data-reactid=".0.1.$3.$0">A</td><td data-reactid=".0.1.$3.$1">3</td><td data-reactid=".0.1.$3.$2">Thu Jan 01 2009 00:00:00 GMT-0400 (AST)</td></tr></tbody>');

            //Test.Simulate.click(cells[0]);
            //expect(node.innerHTML).toEqual('<thead data-reactid=".0.0"><tr data-reactid=".0.0.0"><th data-reactid=".0.0.0.$0"><span data-reactid=".0.0.0.$0.0">Name</span><span data-reactid=".0.0.0.$0.1">⇧</span></th><th data-reactid=".0.0.0.$1"><span data-reactid=".0.0.0.$1.0">Age</span><span data-reactid=".0.0.0.$1.1"></span></th><th data-reactid=".0.0.0.$2"><span data-reactid=".0.0.0.$2.0">Date</span><span data-reactid=".0.0.0.$2.1"></span></th></tr></thead><tbody data-reactid=".0.1"><tr data-reactid=".0.1.$0"><td data-reactid=".0.1.$0.$0">A</td><td data-reactid=".0.1.$0.$1">3</td><td data-reactid=".0.1.$0.$2">Thu Jan 01 2009 00:00:00 GMT-0400 (AST)</td></tr><tr data-reactid=".0.1.$1"><td data-reactid=".0.1.$1.$0">B</td><td data-reactid=".0.1.$1.$1">7</td><td data-reactid=".0.1.$1.$2">Thu Jul 24 1902 00:00:00 GMT-0400 (AST)</td></tr><tr data-reactid=".0.1.$2"><td data-reactid=".0.1.$2.$0">C</td><td data-reactid=".0.1.$2.$1">1</td><td data-reactid=".0.1.$2.$2">Thu Mar 08 2001 00:00:00 GMT-0400 (AST)</td></tr><tr data-reactid=".0.1.$3"><td data-reactid=".0.1.$3.$0">D</td><td data-reactid=".0.1.$3.$1">1</td><td data-reactid=".0.1.$3.$2">Mon Jan 01 2001 00:00:00 GMT-0400 (AST)</td></tr></tbody>');

            //       Test.Simulate.click(cells[1]);
            //      expect(node.innerHTML).toEqual('<thead data-reactid=".0.0"><tr data-reactid=".0.0.0"><th data-reactid=".0.0.0.$0">Name</th><th data-reactid=".0.0.0.$1">Age⇩</th><th data-reactid=".0.0.0.$2">Date</th></tr></thead><tbody data-reactid=".0.1"><tr data-reactid=".0.1.$0"><td data-reactid=".0.1.$0.$0">B</td><td data-reactid=".0.1.$0.$1">7</td><td data-reactid=".0.1.$0.$2">Thu Jul 24 1902 00:00:00 GMT-0400 (AST)</td></tr><tr data-reactid=".0.1.$1"><td data-reactid=".0.1.$1.$0">A</td><td data-reactid=".0.1.$1.$1">3</td><td data-reactid=".0.1.$1.$2">Thu Jan 01 2009 00:00:00 GMT-0400 (AST)</td></tr><tr data-reactid=".0.1.$2"><td data-reactid=".0.1.$2.$0">C</td><td data-reactid=".0.1.$2.$1">1</td><td data-reactid=".0.1.$2.$2">Thu Mar 08 2001 00:00:00 GMT-0400 (AST)</td></tr><tr data-reactid=".0.1.$3"><td data-reactid=".0.1.$3.$0">D</td><td data-reactid=".0.1.$3.$1">1</td><td data-reactid=".0.1.$3.$2">Mon Jan 01 2001 00:00:00 GMT-0400 (AST)</td></tr></tbody>');

            //    Test.Simulate.click(cells[1]);
            //  expect(node.innerHTML).toEqual('<thead data-reactid=".0.0"><tr data-reactid=".0.0.0"><th data-reactid=".0.0.0.$0">Name</th><th data-reactid=".0.0.0.$1">Age⇩</th><th data-reactid=".0.0.0.$2">Date</th></tr></thead><tbody data-reactid=".0.1"><tr data-reactid=".0.1.$0"><td data-reactid=".0.1.$0.$0">D</td><td data-reactid=".0.1.$0.$1">1</td><td data-reactid=".0.1.$0.$2">Mon Jan 01 2001 00:00:00 GMT-0400 (AST)</td></tr><tr data-reactid=".0.1.$1"><td data-reactid=".0.1.$1.$0">C</td><td data-reactid=".0.1.$1.$1">1</td><td data-reactid=".0.1.$1.$2">Thu Mar 08 2001 00:00:00 GMT-0400 (AST)</td></tr><tr data-reactid=".0.1.$2"><td data-reactid=".0.1.$2.$0">A</td><td data-reactid=".0.1.$2.$1">3</td><td data-reactid=".0.1.$2.$2">Thu Jan 01 2009 00:00:00 GMT-0400 (AST)</td></tr><tr data-reactid=".0.1.$3"><td data-reactid=".0.1.$3.$0">B</td><td data-reactid=".0.1.$3.$1">7</td><td data-reactid=".0.1.$3.$2">Thu Jul 24 1902 00:00:00 GMT-0400 (AST)</td></tr></tbody>');

            //Test.Simulate.click(cells[2]);
            //expect(node.innerHTML).toEqual('<thead data-reactid=".0.0"><tr data-reactid=".0.0.0"><th data-reactid=".0.0.0.$0">Name</th><th data-reactid=".0.0.0.$1">Age</th><th data-reactid=".0.0.0.$2">Date⇩</th></tr></thead><tbody data-reactid=".0.1"><tr data-reactid=".0.1.$0"><td data-reactid=".0.1.$0.$0">D</td><td data-reactid=".0.1.$0.$1">1</td><td data-reactid=".0.1.$0.$2">Fri May 22 2015 07:35:48 GMT-0400 (AST)</td></tr><tr data-reactid=".0.1.$1"><td data-reactid=".0.1.$1.$0">A</td><td data-reactid=".0.1.$1.$1">3</td><td data-reactid=".0.1.$1.$2">Fri May 22 2015 07:35:48 GMT-0400 (AST)</td></tr><tr data-reactid=".0.1.$2"><td data-reactid=".0.1.$2.$0">C</td><td data-reactid=".0.1.$2.$1">1</td><td data-reactid=".0.1.$2.$2">Tue Jul 16 1974 13:57:34 GMT-0400 (AST)</td></tr><tr data-reactid=".0.1.$3"><td data-reactid=".0.1.$3.$0">B</td><td data-reactid=".0.1.$3.$1">7</td><td data-reactid=".0.1.$3.$2">Sun Jul 14 1974 06:16:51 GMT-0400 (AST)</td></tr></tbody>');

            //Test.Simulate.click(cells[2]);
            //expect(node.innerHTML).toEqual('<thead data-reactid=".0.0"><tr data-reactid=".0.0.0"><th data-reactid=".0.0.0.$0">Name</th><th data-reactid=".0.0.0.$1">Age</th><th data-reactid=".0.0.0.$2">Date⇩</th></tr></thead><tbody data-reactid=".0.1"><tr data-reactid=".0.1.$0"><td data-reactid=".0.1.$0.$0">B</td><td data-reactid=".0.1.$0.$1">7</td><td data-reactid=".0.1.$0.$2">Sun Jul 14 1974 06:16:51 GMT-0400 (AST)</td></tr><tr data-reactid=".0.1.$1"><td data-reactid=".0.1.$1.$0">C</td><td data-reactid=".0.1.$1.$1">1</td><td data-reactid=".0.1.$1.$2">Tue Jul 16 1974 13:57:34 GMT-0400 (AST)</td></tr><tr data-reactid=".0.1.$2"><td data-reactid=".0.1.$2.$0">A</td><td data-reactid=".0.1.$2.$1">3</td><td data-reactid=".0.1.$2.$2">Fri May 22 2015 07:35:48 GMT-0400 (AST)</td></tr><tr data-reactid=".0.1.$3"><td data-reactid=".0.1.$3.$0">D</td><td data-reactid=".0.1.$3.$1">1</td><td data-reactid=".0.1.$3.$2">Fri May 22 2015 07:35:48 GMT-0400 (AST)</td></tr></tbody>');

        })

    });


});
