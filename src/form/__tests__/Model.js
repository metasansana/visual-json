
export default {
    model: {},

    set: jest.genMockFunction().mockImplementation(
        function (name, value, control, target) {
            this.model[name] = value;
            return this;
        }),
    get: jest.genMockFunction(),
    validate: jest.genMockFunction()

};