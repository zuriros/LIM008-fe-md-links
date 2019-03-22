"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cliFunc = void 0;

var _mdLinks = require("../md-links.js");

var _calculStats = require("../calcul-stats.js");

var _validLinks = require("./valid-links.js");

var cliFunc = function cliFunc(prosArg) {
  return new Promise(function (resolve) {
    // La condición del if retorna un booleano, este caso se da cuando el usuario ingresa --v y --st
    if ((prosArg.includes('--validate') || prosArg.includes('--v')) && (prosArg.includes('--stats') || prosArg.includes('--s'))) {
      (0, _mdLinks.mdLinks)(prosArg[2], {
        validate: true,
        stats: true
      }).then(function (showProm) {
        return resolve((0, _calculStats.unitCalcBrok)(showProm));
      });
    } else if (prosArg.includes('--validate') || prosArg.includes('--v')) {
      // const objToString = showProm.map((element) => `${element.file} ${element.href} ${element.status} ${element.statusText} ${element.text}`);
      (0, _mdLinks.mdLinks)(prosArg[2], {
        validate: true,
        stats: false
      }).then(function (showProm) {
        return resolve(showProm.map(function (element) {
          return "".concat(element.file, " ").concat(element.href, " ").concat(element.status, " ").concat(element.statusText, " ").concat(element.text);
        }).join('\n'));
      });
    } else if (prosArg.includes('--stats') || prosArg.includes('--s')) {
      (0, _mdLinks.mdLinks)(prosArg[2], {
        validate: false,
        stats: true
      }).then(function (showProm) {
        return resolve((0, _calculStats.calculStats)(showProm));
      });
    } else {
      (0, _mdLinks.mdLinks)(prosArg[2], {
        validate: false,
        stats: false
      }).then(function (showProm) {
        return resolve(showProm.map(function (element) {
          return "".concat(element.file, " ").concat(element.href, " ").concat(element.text);
        }).join('\n'));
      });
    }
  });
};

exports.cliFunc = cliFunc;