
import React from 'react/addons';
import Table from '../Table';

describe('Table', function () {

    describe('Table.render()', function () {

        it('should render the correct markup', function () {

            var props = {
                columns:[
                    {name:'name', label:'Name'},
                    {name:'age', label:'Age'},
                    {name:'job', label:'Job'},

                ],
                data:[
                    {name:'Lester', age:18, job:'None'},
                    {name:'Agard', age:38, job:'None'},
                    {name:'Blake', age:38, job:'Steward'}
                ]

            };

            var html = React.renderToStaticMarkup(React.createElement(Table, props));

            expect(html).toBe('<table class="table "><thead><tr><th>Name</th><th>Age</th><th>Job</th></tr></thead><tbody><tr><td>Lester</td><td>18</td><td>None</td></tr><tr><td>Agard</td><td>38</td><td>None</td></tr><tr><td>Blake</td><td>38</td><td>Steward</td></tr></tbody></table>');

        });

        it('should render with filters', function() {

            var f = function(value){
                return 0;
            }

            var props = {
                columns:[
                    {name:'name', label:'Name', filter:f},
                    {name:'age', label:'Age', filter:f},
                    {name:'job', label:'Job', filter:f},

                ],
                data:[
                    {name:'Lester', age:18, job:'None'},
                    {name:'Agard', age:38, job:'None'},
                    {name:'Blake', age:38, job:'Steward'}
                ]

            };

            var html = React.renderToStaticMarkup(React.createElement(Table, props));

            expect(html).toBe('<table class="table "><thead><tr><th>Name</th><th>Age</th><th>Job</th></tr></thead><tbody><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td></tr><tr><td>0</td><td>0</td><td>0</td></tr></tbody></table>');

        });

        it('should ignore fields not in columns', function() {

            var props = {
                columns:[
                    {name:'name', label:'Name'}
                ],
                data:[
                    {name:'Lester', age:18, job:'None'},
                    {name:'Agard', age:38, job:'None'},
                    {name:'Blake', age:38, job:'Steward'}
                ]

            };

            var html = React.renderToStaticMarkup(React.createElement(Table, props));

            expect(html).toBe('<table class="table "><thead><tr><th>Name</th></tr></thead><tbody><tr><td>Lester</td></tr><tr><td>Agard</td></tr><tr><td>Blake</td></tr></tbody></table>');

        });
        });


});
