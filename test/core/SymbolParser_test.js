import expect from 'must';
import DotAccess from 'dot-access';
import SymbolParser from '../../src/core/SymbolParser';

var parser;
var tree;
var scope;
var values;

beforeEach(function(){

    scope = {
        resolve(key) {
            return DotAccess.get(values, key);
        }
    }

});

beforeEach(function() {
    parser = new SymbolParser();
});

describe('SymbolParser', function () {

    describe('SymbolParser#parse', function () {

        it('should work', function () {

            values = {
                funky: function() {return 'funky'},
                person: {
                    name: {
                        full:'Funky Person'
                    }
                },
                affinity:{allowed: 'fire'}
            };

            var result = parser.parse({
                "@name":"person.name.full",
                "clan": "none",
                "^power":"uses {{affinity.allowed}} to attack",
                "$->methods": {
                    "@attack":"funky",
                    "defend": "none"
                }
            }, scope);

            expect(result).eql({
                name: 'Funky Person',
                clan: 'none',
                power: 'uses fire to attack',
                methods: {
                    attack: values.funky,
                    defend:'none'
                }
            })
        });

    });

});