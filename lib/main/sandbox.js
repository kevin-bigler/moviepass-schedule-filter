"use strict";

require("@babel/polyfill");

var _getSchedule = _interopRequireDefault(require("./getSchedule.sandbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: get the /movies page and parse the days and movies under it
(0, _getSchedule.default)();
document.getElementById('main').innerHTML('a winner is you');