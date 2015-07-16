import form from './form';
import view from './view';
import state from './state';
import types from './types';
import filters from './filters';
import extras from './extras';
import Compiler from './Compiler';
import Parser from './Parser';
import Realm from './Realm';
import Environment from './core/Environment';
import 'babel/polyfill';
window.PENIS = 'O=><>';
export default {
    Compiler: Compiler,
    Parser: Parser,
    Realm:Realm,
    Environment: Environment,
    form: form,
    state: state,
    view: view,
    types: types,
    filters: filters,
    extras: extras
};