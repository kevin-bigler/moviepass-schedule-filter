"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _cheerio = _interopRequireDefault(require("cheerio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getSchedule =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _axios.default.get('https://www.moviepass.com/movies/');

          case 3:
            result = _context.sent;
            // console.log('got schedule (movies page):', result);
            console.log(parseSchedule(result.data));
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            console.error('error getting schedule', _context.t0.message, _context.t0.stack);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 7]]);
  }));

  return function getSchedule() {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Get the schedule data from the /movies page HTML
 */


var parseSchedule = function parseSchedule(html) {
  console.log('parsing schedule', html.length);

  var $ = _cheerio.default.load(html);
  /*
      h3.movie-header => the date
      div.outer-wrapper
   */


  var dates = $('#createMoviesForTheWeek .movie-header').map(function (x) {
    return x.text();
  }); // return dates;

  return $('#createMoviesForTheWeek').find($('.movie-header')).length; // return $('#createMoviesForTheWeek');
  // return $.html();
};

var _default = getSchedule;
exports.default = _default;