'use strict';

var _foo = require('./foo');

var _foo2 = _interopRequireDefault(_foo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const string = (0, _foo2.default)();
console.log(string);