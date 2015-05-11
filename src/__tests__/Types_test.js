import React from 'react/addons';

import Types from '../Types';
import Panel from '../view/Panel';
import DefinitionList from '../view/DefinitionList';
import FormGroup from '../form/FormGroup';
import TextArea from '../form/TextArea';
import Select from '../form/Select';
import Radio from '../form/Radio';
import Input from '../form/Input';

var Test = React.addons.TestUtils;
var processor;

class LameComponent extends React.Component {

    render() {
        return (<input/>);
    }
}

describe('Types', function () {

    beforeEach(function () {

        processor = {
            process: jest.genMockFunction().mockImplementation(function () {
                return <LameComponent/>
            }),
            filter: jest.genMockFunction().mockImplementation(function (list, value) {
                return value;
            })
        };

    });

    describe('Types.formgroup', function () {

        it('it should work', function () {

            var ele = Types.formgroup(
                {
                    label: {value: 'Xyz', className: 'col-md-2'},
                    controls: [
                        {wrapName: 'col-md-5', control: {}},
                        {wrapName: 'col-md-5', control: {}}
                    ]
                }, {}, processor);

            expect(React.isValidElement(ele)).toBe(true);
            expect(React.renderToStaticMarkup(ele)).toBe(
                '<div class="form-group">' +
                '<label class="control-label col-md-2">Xyz</label>' +
                '<div class="col-md-5"><input></div>' +
                '<div class="col-md-5"><input></div>' +
                '</div>');
        });


    });

    describe('Types.dl', function () {

        it('it should work', function () {

            var ele = Types.dl(
                {
                    labels: [
                        {label: 'Package', name: 'package'},
                        {label: 'Plan', name: 'plans.selected'},
                        {label: 'Option', name: 'options.selected'}
                    ]
                },
                {
                    package: 'C76',
                    place: 'Invalid',
                    options: {selected: 'xmas'}

                }, processor);

            expect(Test.isElementOfType(ele, DefinitionList)).toBe(true);
            expect(React.renderToStaticMarkup(ele)).toBe(
                '<dl class="dl-horizontal"><dt>Package</dt>' +
                '<dd>C76</dd><dt>Plan</dt><dd></dd><dt>Option</dt>' +
                '<dd>xmas</dd></dl>');


        });


    });

    describe('Types.textarea', function () {

        it('it should work', function () {

            var ele = Types.textarea(
                {
                    name: 'values.area'
                },
                {
                    values: {
                        area: 'The Bull Pen'
                    }

                }, processor);

            expect(Test.isElementOfType(ele, TextArea)).toBe(true);
            expect(React.renderToStaticMarkup(ele).replace(/\s/g, "")).toBe(
                ('<textarea class="form-control" ' +
                'id="values.area" name="values.area">' +
                'The Bull Pen</textarea>').replace(/\s/g, ""));


        });


    });


})
;
