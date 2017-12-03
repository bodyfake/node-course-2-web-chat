const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    const from = 'Andy';
    const text = 'Hello';
    const message = generateMessage(from, text);
    expect(message.createdAt).toBeA('number');    
    expect(message).toInclude({from, text});
  });
});


describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    const from = 'Andy';
    const latitude = 53;
    const longitude= 13;
    const url = `http://www.google.com/maps?q=${latitude},${longitude}`;
    const message = generateLocationMessage(from, latitude, longitude);
    expect(message.createdAt).toBeA('number');    
    expect(message).toInclude({from, url});
  });
});