"use strict";

var _callPath = require("./call-path.js");

var path = require('path');

var fs = require('fs');

// Se crea una función que extraerá los links.
var getTheLinks = function getTheLinks(arrPaths) {
  var arrObjLinks = [];
  var funcPathsArr = (0, _callPath.recurFolder)(arrPaths);
  var applyingRegEx = /(^|[^!])(\[.+\])(\(.+\))/gm;
  funcPathsArr.forEach(function (pathFileMd) {
    var fileMd = fs.readFileSync(pathFileMd).toString(); // Se aplica el método exec, este te devuelve un objeto

    var getLinks = applyingRegEx.exec(fileMd);

    while (getLinks !== null) {
      arrObjLinks.push({
        text: getLinks[2],
        href: getLinks[3],
        file: pathFileMd
      });
      console.log(arrObjLinks);
    }
  });
};