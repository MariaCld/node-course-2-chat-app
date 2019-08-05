var expect = require('expect');
var { generateMessage } = require('./message');

describe('Generate message', () => {
    it('should generate correct message obj', () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        // expect(message.createdAt).toBeAn('number');
        // expect(message).toContain({ from, text })



    })
});