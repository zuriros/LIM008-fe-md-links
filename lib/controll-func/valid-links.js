"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validatingLinks = void 0;

var _extracLinks = require("./extrac-links.js");

// import { fstatSync, promises } from 'fs';
// import { exec } from 'child_process';
var fetch = require('node-fetch'); // Se crea la función que validará los links extraidos.


var validatingLinks = function validatingLinks(pathAbsFolder) {
  var arrObjLinks = (0, _extracLinks.getTheLinks)(pathAbsFolder);
  var getAllLinks = arrObjLinks.map(function (linkObj) {
    return new Promise(function (resolve) {
      return fetch(linkObj.href) // el then te dvuelve un objeto llamado response dentro de este se ubica a status(200) y statustext('ok')
      .then(function (res) {
        if (res.status >= 200 && res.status < 400) {
          linkObj.status = res.status;
          linkObj.statusText = res.statusText;
          resolve(linkObj);
        } else {
          linkObj.status = res.status;
          linkObj.statusText = 'Fail';
          resolve(linkObj);
        }
      }).catch(function () {
        linkObj.status = '';
        linkObj.statusText = 'Not Found';
        resolve(linkObj);
      });
    });
  });
  return Promise.all(getAllLinks);
}; // console.log(validatingLinks('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src').then(sec => console.log(sec)));


exports.validatingLinks = validatingLinks;