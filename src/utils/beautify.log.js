const beautify = {
	log(...params) {
		let strings = params;

		strings = strings.map(string => {
			let str = string;

			str = str.replace(/{reset}/gi, '\x1b[0m');
			str = str.replace(/{bright}/gi, '\x1b[1m');
			str = str.replace(/{dim}/gi, '\x1b[2m');
			str = str.replace(/{underscore}/gi, '\x1b[4m');
			str = str.replace(/{blink}/gi, '\x1b[5m');
			str = str.replace(/{reverse}/gi, '\x1b[7m');
			str = str.replace(/{hidden}/gi, '\x1b[8m');

			str = str.replace(/{fgblack}/gi, '\x1b[30m');
			str = str.replace(/{fgred}/gi, '\x1b[31m');
			str = str.replace(/{fggreen}/gi, '\x1b[32m');
			str = str.replace(/{fgyellow}/gi, '\x1b[33m');
			str = str.replace(/{fgblue}/gi, '\x1b[34m');
			str = str.replace(/{fgmagenta}/gi, '\x1b[35m');
			str = str.replace(/{fgcyan}/gi, '\x1b[36m');
			str = str.replace(/{fgwhite}/gi, '\x1b[37m');

			str = str.replace(/{bgblack}/gi, '\x1b[40m');
			str = str.replace(/{bgred}/gi, '\x1b[41m');
			str = str.replace(/{bggreen}/gi, '\x1b[42m');
			str = str.replace(/{bgyellow}/gi, '\x1b[43m');
			str = str.replace(/{bgblue}/gi, '\x1b[44m');
			str = str.replace(/{bgmagenta}/gi, '\x1b[45m');
			str = str.replace(/{bgcyan}/gi, '\x1b[46m');
			str = str.replace(/{bgwhite}/gi, '\x1b[47m');

			return str;
		});

		strings[strings.length - 1] = `${strings[strings.length - 1]}\x1b[0m`

		console.log(...strings);
	},
};

module.exports = beautify;
