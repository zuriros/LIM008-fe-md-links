#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cliFunc = void 0;

var _mdLinks = require("./md-links.js");

var _calculStats = require("./calcul-stats.js");

var _validLinks = require("./controll-func/valid-links.js");

var prosArg = process.argv; // ['C:\\Program Files\\nodejs\\node.exe','C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\lib\\cli.js','user\route', option]
//  console.log(prosArg);

var cliFunc = function cliFunc(prosArg) {
  return new Promise(function (resolve) {
    // La condición del if retorna un booleano, este caso se da cuando el usuario ingresa --v y --st
    if (prosArg.includes('--validate') && prosArg.includes('--stats')) {
      (0, _mdLinks.mdLinks)(prosArg[2], {
        validate: true,
        stats: true
      }).then(function (showProm) {
        return resolve((0, _calculStats.unitCalcBrok)(showProm));
      });
    } else if (prosArg.includes('--validate')) {
      (0, _mdLinks.mdLinks)(prosArg[2], {
        validate: true,
        stats: false
      }).then(function (showProm) {
        return resolve(showProm);
      });
    } else if (prosArg.includes('--stats')) {
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
        return resolve(showProm);
      });
    }
  });
}; // cliFunc(process.argv).then(show => console.log(show));


exports.cliFunc = cliFunc;