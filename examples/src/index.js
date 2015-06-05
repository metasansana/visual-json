import React from 'react';
import visualJSON from '../../src/index';
import form from './form.json';
import horizontal from './horizontal.json';
import vertical from './vertical.json';

var realm = visualJSON.Realm.getDefaultRealm();

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

React.render(realm.getParser(context).parse(form), document.getElementById('form'));
React.render(realm.getParser(context).parse(horizontal), document.getElementById('horizontal'));
React.render(realm.getParser(context).parse(vertical), document.getElementById('vertical'));