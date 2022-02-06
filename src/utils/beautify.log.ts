const codeTexts: { [text: string]: string } = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',
  fgBlack: '\x1b[30m',
  fgRed: '\x1b[31m',
  fgGreen: '\x1b[32m',
  fgYellow: '\x1b[33m',
  fgBlue: '\x1b[34m',
  fgMagenta: '\x1b[35m',
  fgCyan: '\x1b[36m',
  fgWhite: '\x1b[37m',
  bgBlack: '\x1b[40m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m',
};

const texts = Object.keys(codeTexts);

export const transformMessage = (message: any) => {
  for (let i = 0; i < texts.length; i++) {
    if (!message.toLowerCase().includes(texts[i].toLowerCase())) {
      continue;
    }

    message = message.replace(
      new RegExp(`{${texts[i]}}`, 'gi'),
      codeTexts[texts[i]]
    );
  }

  return message;
};

export const resetFinalMessage = (message: string) => {
  if (message.includes('\x1b[0m')) {
    return message;
  }

  return `${message}\x1b[0m`;
};

export const transformMessages = (message?: any, ...optionalParams: any[]) => {
  const transformedMessages = [message, ...optionalParams].map(
    transformMessage
  );

  if (transformedMessages.length > 0) {
    transformedMessages[transformedMessages.length - 1] = resetFinalMessage(
      transformedMessages[transformedMessages.length - 1]
    );
  }

  return transformedMessages;
};

const beautify = {
  log(message?: any, ...optionalParams: any[]) {
    const transformedLog = transformMessages(message, ...optionalParams);
    console.log(...transformedLog);
  },
};

export default beautify;
