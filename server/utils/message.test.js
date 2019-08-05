var expect = require('expect');
var { generateMessage, generateLocationMessage } = require('./message');

describe('Generate message', () => {
    it('should generate correct message obj', () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

          //expect(message.createdAt).toBeAn('number');
          //expect(message).toContain({ from, text })
    })
});


describe('Generate location message', () => {
    it('should generate correct location obj', () => {
        var from = 'Jen';
        var latitude = 15;
        var longitude = 19;
        var url = 'https://www.google.com/maps?=15,19';
        var message = generateLocationMessage(from, latitude, longitude);

       // expect(message.createdAt).toBeAn('number');
        //expect(message).toContain({ from, url })
    })
});