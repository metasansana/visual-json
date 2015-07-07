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
                compile(o) {
                    return "<profile>" + o.name + "(" + o.points + ")</profile>";
                }
            });

            var output = env.parse({
                "$set": {
                    "name": "Patrick Mickle"
                },
                "$compile": {
                    "type": "profile",
                    "@name": "$local.name",
                    "@points": "$self.state.score"
                }

            }, self);

            expect(output).equal("<profile>Patrick Mickle(24)</profile>");

        });

    });

    describe('Environment#parseWithResource', function () {

        it('should work', function (done) {

            self = {
                state: {
                    score: 24
                }
            };

            env.addType('profile', {
                compile(o) {
                    return "<profile>" + o.name + "(" + o.points + ")</profile>";
                }
            });

            env.parseWithResource({
                "$set": {
                    "name": "Patrick Mickle"
                },
                "$compile": {
                    "type": "profile",
                    "@name": "$local.name",
                    "@points": "$self.state.score"
                }

            }, self, function (output) {

                expect(output).equal("<profile>Patrick Mickle(24)</profile>");
                done();

            })

        });

    })

});