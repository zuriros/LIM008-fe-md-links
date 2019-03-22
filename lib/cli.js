#!/usr/bin/env node
"use strict";

var _cliFunc = require("./controll-func/cli-func.js");

var prosArg = process.argv;
(0, _cliFunc.cliFunc)(prosArg).then(function (show) {
  return console.log('desde afuera', show);
}); // 'C:\Users\Laboratoria\Documents\LIM008-fe-md-links\src\md-links.js'