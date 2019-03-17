"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _callPath = require("./controll-func/call-path.js");

var _extracLinks = require("./controll-func/extrac-links.js");

var _validLinks = require("./controll-func/valid-links.js");

// import { resolve } from 'dns';
// import { doesNotReject } from 'assert';
var mdLinks = function mdLinks(path, option) {
  // llamamos a la función que convierte la ruta a absoluta.
  var pathAbsol = (0, _callPath.relativeToAbsolute)(path); // creamos la nueva promesa 

  return new Promise(function (resolve) {
    // si el usuario ingresa la opción validate  
    if (option.validate) {
      resolve((0, _validLinks.validatingLinks)(pathAbsol));
    } else {
      resolve((0, _extracLinks.getTheLinks)(pathAbsol)); // console.log(getTheLinks(recurFolder('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src')));
    }
  });
}; // mdLinks('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src', {validate: true}).then(res => console.log(res));


exports.mdLinks = mdLinks;