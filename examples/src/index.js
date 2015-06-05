import React from 'react';
import lib from '../../src/index';
import form from './form.json';
import horizontal from './horizontal.json';

var ctx = lib.getDefaultContext();
var context = {
    "area":"Is what this is about.",
    set: function (k,v){
        this[k] = v;
    },
    get: function (k){
        return this[k];
    },
    validate: function(){

    }

};

React.render(ctx.generate(form, context), document.getElementById('form'));
//React.render(ctx.generate(horizontal, context), document.getElementById('horizontal'));