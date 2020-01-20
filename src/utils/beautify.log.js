const beautify = {
	log(...params) {
		const strings = params.map(string => {
			let str = string;

			const texts = [
				'reset', 'bright', 'dim', 'underscore', 'blink', 'reverse', 'hidden', 'fgBlack',
				'fgRed', 'fgGreen', 'fgYellow', 'fgBlue', 'fgMagenta', 'fgCyan', 'fgWhite', 'bgBlack',
				'bgRed', 'bgGreen', 'bgYellow', 'bgBlue', 'bgMagenta', 'bgCyan', 'bgWhite',
			];

			const codes = [
				'\x1b[0m', '\x1b[1m', '\x1b[2m', '\x1b[4m', '\x1b[5m', '\x1b[7m', '\x1b[8m', '\x1b[30m',
				'\x1b[31m', '\x1b[32m', '\x1b[33m', '\x1b[34m', '\x1b[35m', '\x1b[36m', '\x1b[37m', '\x1b[40m',
				'\x1b[41m', '\x1b[42m', '\x1b[43m', '\x1b[44m', '\x1b[45m', '\x1b[46m', '\x1b[47m',
			];

			for (let i = 0; i < texts.length; i++) {
				str = str.replace(RegExp(`{${texts[i]}}`, 'gi'), codes[i]);
			}

			return str;
		});

		strings[strings.length - 1] = `${strings[strings.length - 1]}\x1b[0m`;

		console.log(...strings);
	},
};

module.exports = beautify;
