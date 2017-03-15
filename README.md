#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

> Generate react.js powered uis from json.

##Status
Cancelled. Using JSON to model user interfaces was a terrible experience!

## Install

```sh
$ npm install --save visual-json
```


## Usage

```js
var visual = require('visual-json');
var context = require('./MyContext');

var realm = visual.Realm.getDefaultRealm().getParser(context).parse({"type":"view", content:"Some content"});
```

## License

Apache2 © [Lasana Murray](http://trinistorm.org)


[npm-url]: https://npmjs.org/package/visual-json
[npm-image]: https://badge.fury.io/js/visual-json.svg
[travis-url]: https://travis-ci.org/metasansana/visual-json
[travis-image]: https://travis-ci.org/metasansana/visual-json.svg?branch=master
[daviddm-url]: https://david-dm.org/metasansana/visual-json.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/metasansana/visual-json
