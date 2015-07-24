import expect from 'must';
import Environment from '../../src/core/Environment';

var env;
var self;

describe('Environment', function () {

    beforeEach(function () {
        global.window = {};
        global.document = {};
        env = new Environment();
    });

    describe('Environment#parse', function () {

        it('should work', function () {

            self = {
                state: {
                    score: 24
                }
            };

            env.addType('profile', {
                compile(tree, scope) {
                    var o = tree.toObject();
                    return "<profile>" + o.name + "(" + o.points + ")</profile>";
                }
            });

            var output = env.generate({
                "type": "profile",
                "visual:set": {
                    "name": "Patrick Mickle"
                },
                "@name": "$local.name",
                "@points": "$self.state.score"

            }, self, {});

            expect(output).equal("<profile>Patrick Mickle(24)</profile>");

        });

    });


});