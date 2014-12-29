#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Regex for checking HTML has a valid theme-color meta tag.

## Install

```sh
$ npm install --save regex-theme-color
```


## Usage

```js
var regexThemeColor = require('regex-theme-color');

regexThemeColor().test('<meta name="theme-color" content="#3372DF">');
//=> true

regexThemeColor().test('<meta   name="theme-color" content="#3372DF" >');
//=> true

regexThemeColor().test('<meta   name="theme-color" content=\'#3372DF\' >');
//=> true

regexThemeColor().test('<meta name="">');
//=> false
```


## License

MIT © [Addy Osmani](addyosmani.com)


[npm-url]: https://npmjs.org/package/regex-theme-color
[npm-image]: https://badge.fury.io/js/regex-theme-color.svg
[travis-url]: https://travis-ci.org/addyosmani/regex-theme-color
[travis-image]: https://travis-ci.org/addyosmani/regex-theme-color.svg?branch=master
[daviddm-url]: https://david-dm.org/addyosmani/regex-theme-color.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/addyosmani/regex-theme-color
