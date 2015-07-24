import React from 'react';
import extras from '../../src/extras';

var env = new visual.Environment();
extras.react.bootstrap.install(env);

var x = {
    type: "container",
    "children": [
        {
            
        }, {
            type: "panel",
            heading: "Form",
            "compile:body": {
                type: "form",
                "children": [{
                    type: "checkbox",
                    name: "plainCheckbox",
                    "@set": "$self.set",
                    "@value": "$self.state.plainCheckbox"
                }, {
                    type: "radio",
                    name: "plainRadio",
                    "@set": "$self.set",
                    "@checked": "$self.state.plainRadio",
                    "value": "Pelau",
                },
                    {
                        "type": "vertical-input",
                        "@set": "$self.set",
                        "name": "verticalInput",
                        "@value": "$self.state.verticalInput",
                        "labelValue": "Vertical Input"
                    }, {
                        "type": "vertical-textarea",
                        "@set": "$self.set",
                        "name": "verticalTextarea",
                        "@value": "$self.state.verticalTextarea",
                        "labelValue": "Vertical Texarea"
                    },
                    {
                        "type": "vertical-select",
                        "@set": "$self.set",
                        "name": "verticalSelect",
                        "@value": "$self.state.verticalSelect",
                        "labelValue": "Vertical Select",
                        "labelField": "name",
                        "valueField": "age",
                        "options": [
                            {"name": "Lasana", "age": 18},
                            {"name": "Kurt", "age": 50},
                            {"name": "Donna", "age": 65},
                            {"name": "Shaina", "age": 186},
                            {"name": "Jinja", "age": 486}

                        ]
                    }]

            }
        },
        {
            type: "panel",
            heading: "Form",
            "compile:body": {
                type: "form",
                className: 'form-horizontal',
                "children": [{
                    type: 'horizontal-group',
                    "labelValue": "A Horizontal Checkbox",
                    'children': [
                        {
                            "type": "column",
                            "className": "col-md-8",
                            "children": [
                                {
                                    type: 'checkbox',
                                    name: 'plainCheckbox',
                                    '@set': '$self.set',
                                    '@value': '$self.state.plainCheckbox'
                                },
                                {
                                    type: 'checkbox',
                                    name: 'plainCheckbox',
                                    '@set': '$self.set',
                                    '@value': '$self.state.plainCheckbox'
                                },
                                {
                                    type: 'checkbox',
                                    name: 'plainCheckbox',
                                    '@set': '$self.set',
                                    '@value': '$self.state.plainCheckbox'
                                }
                            ]
                        }
                    ]
                }]

            }
        }


    ]
};

class Context extends React.Component {

    constructor(props) {
        super(props);
        this.state = {area: "Is what this is about.", verticalSelect: 186};
    }

    onRow() {
        console.log('row slected ', arguments);
    }

    onAll() {
        console.log('all row slected ', arguments);
    }

    set(k, v) {

        console.log('Set ', k, ' to ', v);
        var change = {};
        change[k] = v;
        this.setState(change);

    }

    render() {
        var ret = env.generate(require('./json/main'), this);

        console.log(ret);
        return ret;
    }

}

React.render(React.createElement(Context), document.getElementById('form'));