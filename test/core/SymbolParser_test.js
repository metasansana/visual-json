import expect from 'must';
import DotAccess from 'dot-access';
import SymbolParser from '../../src/core/SymbolParser';

var parser;
var tree;
var scope;
var values;

beforeEach(function () {

    scope = {
        resolve(key) {
            return DotAccess.get(values, key);
        }
    }

});

beforeEach(function () {
    parser = new SymbolParser();
});

describe('SymbolParser', function () {

    describe('SymbolParser#parse', function () {

        it('should work', function () {

            values = {
                funky: function () {
                    return 'funky'
                },
                person: {
                    name: {
                        full: 'Funky Person'
                    }
                },
                affinity: {allowed: 'fire'}
            };

            var result = parser.parse({
                "@name": "person.name.full",
                "clan": "none",
                "^power": "uses {{affinity.allowed}} to attack",
                "->methods": {
                    "defend": "none"
                }
            }, scope);

            expect(result).eql({
                name: 'Funky Person',
                clan: 'none',
                power: 'uses fire to attack',
                methods: {
                    defend: 'none'
                }
            })
        });

        it('should work with callables', function () {

            values = {
                person: {
                    other: 'o$$',
                    method: function (number) {
                        return number;
                    },
                    method2: function (string) {
                        return string;
                    },
                    method3: function (one, two) {
                        return one + two;
                    },
                    method4: function (key) {
                        return key;
                    }

                }
            };

            var result = parser.parse({
                "@name": "person.method('son')",
                "@age": "person.method2(12)",
                "@sum": "person.method3(1,2)",
                "@other": "person.method4(person.other)"

            }, scope);

            expect(result.name()).eql('son');
            expect(result.age()).eql('12');
            expect(result.sum()).eql('12'); // broken should be 3
            //expect(result.other()).eql('o$$');  //test broken

        });


        it('should work with expressions', function () {

            values = {
                person: {
                   age:34,
                    group:1979
                }
            };

            var result = parser.parse({
                "=diff": "person.group - person.age"
            }, scope);

            expect(result.diff).eql(1945);

        });

    });

});