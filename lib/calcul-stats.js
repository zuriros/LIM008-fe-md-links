"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unitCalcBrok = exports.linksBroken = exports.calculStats = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var calculStats = function calculStats(dataObjLink) {
  // // llamando a la función array de objetos
  var totalLinks = dataObjLink.length; // aplicamos ...new Set() es unaa propiedad que filtra solo los únicos

  var uniqueLinks = _toConsumableArray(new Set(dataObjLink.map(function (res) {
    return res.href;
  }))).length;

  return "Total:".concat(totalLinks, "\nUnique:").concat(uniqueLinks);
};

exports.calculStats = calculStats;

var linksBroken = function linksBroken(dataObjLink) {
  var prue = dataObjLink.filter(function (propObj) {
    return propObj.statusText === 'Fail' || propObj.statusText === 'Not Found';
  });
  return "Broken:".concat(prue.length);
};

exports.linksBroken = linksBroken;

var unitCalcBrok = function unitCalcBrok(dataObjLink) {
  return calculStats(dataObjLink).concat('\n', linksBroken(dataObjLink));
}; // const newObjPropiedades = [
//   { text: 'Link roto muy roto',
//     href: 'https://meeeeeeedium.freecodecamp.org/promises-in-',
//     file:
//    'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\mds\\ejemplo\\ejemlo.md',
//     status: '',
//     statusText: 'Not Found' },
//   { text: 'Markdown',
//     href: 'https://es.wikipedia.org/wiki/Markdown',
//     file:
//    'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\mds\\ejemplo\\ejemlo.md',
//     status: 200,
//     statusText: 'OK' },
//   { text: 'Node.js',
//     href: 'https://nodejs.org/khfjhjg',
//     file:
//    'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\mds\\ejemplo\\ejemlo.md',
//     status: 404,
//     statusText: 'Fail' } ];
//  console.log(unitCalcBrok(newObjPropiedades));


exports.unitCalcBrok = unitCalcBrok;