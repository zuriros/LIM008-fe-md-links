"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTheLinks = void 0;

var _fs = require("fs");

var _child_process = require("child_process");

var _callPath = require("./call-path.js");

var path = require('path');

var fs = require('fs');

// Se crea una función que extraerá los links.
var getTheLinks = function getTheLinks(arrPaths) {
  var arrObjLinks = [];
  var funcPathsArr = (0, _callPath.recurFolder)(arrPaths);
  var applyingRegEx = /(^|[^!])\[(.+)\]\((.+)\)/gm;
  funcPathsArr.forEach(function (pathFileMd) {
    var fileMd = fs.readFileSync(pathFileMd).toString(); // Se aplica el método exec, este te devuelve un objeto

    var getLinks = applyingRegEx.exec(fileMd);

    while (getLinks !== null) {
      arrObjLinks.push({
        text: getLinks[2],
        href: getLinks[3].slice(0, 50),
        file: pathFileMd
      }); // Esta linea actualiza getLinks y sigue su recorrido.

      getLinks = applyingRegEx.exec(fileMd);
    }
  });
  return arrObjLinks;
};

exports.getTheLinks = getTheLinks;