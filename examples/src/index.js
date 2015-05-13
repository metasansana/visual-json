import React from 'react';
import lib from '../index';
import sources from './form.json';

var ctx = lib.getDefaultContext();

React.render(ctx.parse(sources,{aboutYou:'Its all about you!'}), document.getElementById('form'));