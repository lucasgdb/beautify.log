# Beautify log

![CRAN/METACRAN](https://img.shields.io/github/issues/lucasgdb/beautify.log)
![CRAN/METACRAN](https://img.shields.io/github/forks/lucasgdb/beautify.log)
![CRAN/METACRAN](https://img.shields.io/github/stars/lucasgdb/beautify.log)
![CRAN/METACRAN](https://img.shields.io/github/license/lucasgdb/beautify.log)

## Description

A Node.js lib to beautify the console.log from JavaScript with colors, making it easy and useful.

## How to use

-   type `yarn add beautify.log` or `npm i beautify.log -s`

## Documentation

All parameters are case-insensitive.

| Parameter    | Result                                   |
| ------------ | ---------------------------------------- |
| {reset}      | Resets to the default color              |
| {bright}     | Shines the text                          |
| {dim}        | Dims the tex                             |
| {underscore} | Puts an underline                        |
| {blink}      | Blinks the text                          |
| {reverse}    | Reverses background and foreground color |
| {hidden}     | Hides the text                           |
| {fgBlack}    | Foreground's color                       |
| {fgRed}      | Foreground's color                       |
| {fgGreen}    | Foreground's color                       |
| {fgYellow}   | Foreground's color                       |
| {fgBlue}     | Foreground's color                       |
| {fgMagenta}  | Foreground's color                       |
| {fgCyan}     | Foreground's color                       |
| {fgWhite}    | Foreground's color                       |
| {bgBlack}    | Background's color                       |
| {bgRed}      | Background's color                       |
| {bgGreen}    | Background's color                       |
| {bgYellow}   | Background's color                       |
| {bgBlue}     | Background's color                       |
| {bgMagenta}  | Background's color                       |
| {bgCyan}     | Background's color                       |
| {bgWhite}    | Background's color                       |

## Usage

```js
const beautify = require('beautify.log'); // or import beautify from 'beautify.log';

beautify.log('{fgRed}Hello, {fgGreen}world!');
beautify.log('{bgWhite}{fgRed}Hello, {bgRed}{fgGreen}world!');
beautify.log('{fgGreen}Hello, {fgRed}world!');
beautify.log('{dim}{fgRed}Hello, {fgGreen}world!');
beautify.log('{underscore}{fgRed}Hello, {fgGreen}world!');
beautify.log('{bright}{fgRed}Hello, {fgGreen}world!');
beautify.log(
	'{bright}{fgYellow}Lorem ipsum dolor {fgBlue}sit amet consectetur {fgCyan}adipisicing elit.',
);
beautify.log(
	'{fgYellow}Lorem ipsum dolor {reset}{bgRed}sit amet consectetur{reset} {fgCyan}adipisicing elit.',
);
beautify.log(
	'{reverse}{fgYellow}Lorem ipsum dolor{reset} {reverse}{bgRed}sit amet consectetur{reset} {reverse}{fgCyan}adipisicing elit.',
);
```

## Output

![who-does-not-follow-me](./images/beautify.log.png)

## Author

| [<img src="https://avatars3.githubusercontent.com/u/13838273?v=3&s=115"><br><sub>@lucasgdb</sub>](https://github.com/lucasgdb) |
| :----------------------------------------------------------------------------------------------------------------------------: |
