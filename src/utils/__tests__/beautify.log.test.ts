import beautify, {
  resetFinalMessage,
  transformMessage,
  transformMessages,
} from '../beautify.log';

describe('transformMessage', () => {
  test('reset', () => {
    const transformedMessage = transformMessage('{reset}hello, world!');
    expect(transformedMessage).toBe('\x1b[0mhello, world!');
  });

  test('bright', () => {
    const transformedMessage = transformMessage('{bright}hello, world!');
    expect(transformedMessage).toBe('\x1b[1mhello, world!');
  });

  test('dim', () => {
    const transformedMessage = transformMessage('{dim}hello, world!');
    expect(transformedMessage).toBe('\x1b[2mhello, world!');
  });

  test('underscore', () => {
    const transformedMessage = transformMessage('{underscore}hello, world!');
    expect(transformedMessage).toBe('\x1b[4mhello, world!');
  });

  test('blink', () => {
    const transformedMessage = transformMessage('{blink}hello, world!');
    expect(transformedMessage).toBe('\x1b[5mhello, world!');
  });

  test('reverse', () => {
    const transformedMessage = transformMessage('{reverse}hello, world!');
    expect(transformedMessage).toBe('\x1b[7mhello, world!');
  });

  test('hidden', () => {
    const transformedMessage = transformMessage('{hidden}hello, world!');
    expect(transformedMessage).toBe('\x1b[8mhello, world!');
  });

  test('fgBlack', () => {
    const transformedMessage = transformMessage('{fgBlack}hello, world!');
    expect(transformedMessage).toBe('\x1b[30mhello, world!');
  });

  test('fgRed', () => {
    const transformedMessage = transformMessage('{fgRed}hello, world!');
    expect(transformedMessage).toBe('\x1b[31mhello, world!');
  });

  test('fgGreen', () => {
    const transformedMessage = transformMessage('{fgGreen}hello, world!');
    expect(transformedMessage).toBe('\x1b[32mhello, world!');
  });

  test('fgYellow', () => {
    const transformedMessage = transformMessage('{fgYellow}hello, world!');
    expect(transformedMessage).toBe('\x1b[33mhello, world!');
  });

  test('fgBlue', () => {
    const transformedMessage = transformMessage('{fgBlue}hello, world!');
    expect(transformedMessage).toBe('\x1b[34mhello, world!');
  });

  test('fgMagenta', () => {
    const transformedMessage = transformMessage('{fgMagenta}hello, world!');
    expect(transformedMessage).toBe('\x1b[35mhello, world!');
  });

  test('fgCyan', () => {
    const transformedMessage = transformMessage('{fgCyan}hello, world!');
    expect(transformedMessage).toBe('\x1b[36mhello, world!');
  });

  test('fgWhite', () => {
    const transformedMessage = transformMessage('{fgWhite}hello, world!');
    expect(transformedMessage).toBe('\x1b[37mhello, world!');
  });

  test('bgBlack', () => {
    const transformedMessage = transformMessage('{bgBlack}hello, world!');
    expect(transformedMessage).toBe('\x1b[40mhello, world!');
  });

  test('bgRed', () => {
    const transformedMessage = transformMessage('{bgRed}hello, world!');
    expect(transformedMessage).toBe('\x1b[41mhello, world!');
  });

  test('bgGreen', () => {
    const transformedMessage = transformMessage('{bgGreen}hello, world!');
    expect(transformedMessage).toBe('\x1b[42mhello, world!');
  });

  test('bgYellow', () => {
    const transformedMessage = transformMessage('{bgYellow}hello, world!');
    expect(transformedMessage).toBe('\x1b[43mhello, world!');
  });

  test('bgBlue', () => {
    const transformedMessage = transformMessage('{bgBlue}hello, world!');
    expect(transformedMessage).toBe('\x1b[44mhello, world!');
  });

  test('bgMagenta', () => {
    const transformedMessage = transformMessage('{bgMagenta}hello, world!');
    expect(transformedMessage).toBe('\x1b[45mhello, world!');
  });

  test('bgCyan', () => {
    const transformedMessage = transformMessage('{bgCyan}hello, world!');
    expect(transformedMessage).toBe('\x1b[46mhello, world!');
  });

  test('bgWhite', () => {
    const transformedMessage = transformMessage('{bgWhite}hello, world!');
    expect(transformedMessage).toBe('\x1b[47mhello, world!');
  });
});

describe('resetFinalMessage', () => {
  test('reset message without reset code', () => {
    const resetedMessage = resetFinalMessage('hello, world!');
    expect(resetedMessage).toBe('hello, world!\x1b[0m');
  });

  test('reset message with reset code', () => {
    const resetedMessage = resetFinalMessage('hello, world!\x1b[0m');
    expect(resetedMessage).toBe('hello, world!\x1b[0m');
  });
});

describe('transformMessages', () => {
  test('long text', () => {
    const transformedMessages = transformMessages(
      "{fgGreen}hello, world! {fgRed}{bgBlack}How are you?{reset} {bgWhite}{fgBlack}I'm okay!"
    );

    expect(transformedMessages).toStrictEqual([
      "\x1b[32mhello, world! \x1b[31m\x1b[40mHow are you?\x1b[0m \x1b[47m\x1b[30mI'm okay!\x1b[0m",
    ]);
  });

  test('more than 1 parameter', () => {
    const transformedMessages = transformMessages('{fgGreen}hello,', 'world!');

    expect(transformedMessages).toStrictEqual([
      '\x1b[32mhello,',
      'world!\x1b[0m',
    ]);
  });

  test('insensitive text', () => {
    const transformedMessages = transformMessages(
      "{fggreen}hello, world! {FGRED}{bgBlack}How are you?{ReseT} {BGWhite}{fgBLACK}I'm okay!"
    );

    expect(transformedMessages).toStrictEqual([
      "\x1b[32mhello, world! \x1b[31m\x1b[40mHow are you?\x1b[0m \x1b[47m\x1b[30mI'm okay!\x1b[0m",
    ]);
  });
});

describe('beautify.log', () => {
  it('calls beautify.log with "hello"', () => {
    const beautifySpy = jest.spyOn(beautify, 'log');

    beautify.log('hello, world!');

    expect(beautifySpy).toHaveBeenCalledWith('hello, world!');
  });
});
