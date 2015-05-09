module.exports = function () {

    return {
        valueChanged: jest.genMockFunction(),
        focusReceived: jest.genMockFunction(),
        focusLost: jest.genMockFunction(),
        clicked: jest.genMockFunction()
    }
}

