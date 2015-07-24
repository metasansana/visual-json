import Tree from '../../src/core/Tree';
import must from 'must';

var tree;
var json;
var key;

describe('Tree', function () {

    beforeEach(function () {
        tree = new Tree(json, key);
    });

    describe('Tree#isPrimitive', function () {

        before(function () {
            json = 1;
        });

        it('should work', function () {
            must(tree.isPrimitive()).eql(true);
        });

    });

    describe('Tree#isArray', function () {

        before(function () {
            json = [];
        });

        it('should work', function () {
            must(tree.isArray()).eql(true);
            must(tree.isObject()).eql(false);
        });

    });

    describe('Tree#isObject', function () {


        it('should work', function () {
            tree = new Tree({}, key);
            must(tree.isObject()).eql(true);
        });

        it('should not treat null as an object', function () {
            tree = new Tree(null, key);
            must(tree.isObject()).eql(false);
        });

    });

    describe('Tree#toObject', function () {

        before(function () {
            json = {
                "type": "pane",
                "other:directive": true,
                "some:directive": {}
            }
        });

        it('should not include directive keys', function () {
            must(tree.toObject()).eql({
                type: 'pane'
            });
        });

    });

    describe('Tree#map', function () {

        before(function () {
            json = {
                tree0: 0,
                tree1: 1,
                tree2: 2
            }
        });
        it('should provide each key as a tree', function () {

            must(tree.map(function (tree) {
                return tree.toObject();
            })).eql[0, 1, 2];

        });

    });

    describe('Tree#getDirectiveTreeBySymbol', function () {

        before(function () {
            json = {
                foo:new Date(),
                bar: 1,
                'foo:bar':'barfooey'
            }
        });
        it('should provide a tree', function () {
            must(tree.getDirectiveTreeBySymbol('foo:').
                toObject()).eql('barfooey');
        });
    });

    describe('Tree#getDirectiveTreesBySymbol', function () {

        before(function () {
            json = {
                foo:new Date(),
                bar: 1,
                'foo:bar':'barfooey',
                'foo:rab':'rabfooey'
            }
        });
        it('should provide each key as a tree', function () {

            var keys = ['bar', 'rab'];
            var called =0;
            must(tree.getDirectiveTreesBySymbol('foo:').map(function(tree) {
                must(keys.indexOf(tree.key) > -1).true();
                called++;
                return tree.toObject();
            })).eql(['barfooey', 'rabfooey'])

            must(called).eql(2);
        });
    });



});