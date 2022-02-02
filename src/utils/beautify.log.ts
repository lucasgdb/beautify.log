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

const convertText = (text: string) => {
  const texts = Object.keys(codeTexts);

  for (let i = 0; i < texts.length; i++) {
    if (!text.toLowerCase().includes(texts[i].toLowerCase())) {
      continue;
    }

    text = text.replace(new RegExp(`{${texts[i]}}`, 'gi'), codeTexts[texts[i]]);
  }

  return text;
};

const resetFinalText = (text: string) => {
  if (text.includes('\x1b[0m')) {
    return text;
  }

  return `${text}\x1b[0m`;
};

const beautify = {
  log(...textsParam: string[]) {
    const convertedTexts = textsParam.map(convertText);

    if (convertedTexts.length > 0) {
      convertedTexts[convertedTexts.length - 1] = resetFinalText(
        convertedTexts[convertedTexts.length - 1]
      );
    }

    console.log(...convertedTexts);
  },
};

export default beautify;
