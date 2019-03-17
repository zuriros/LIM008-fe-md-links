"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.recurFolder = exports.validMd = exports.fileOrFolder = exports.relativeToAbsolute = void 0;

var _fs = require("fs");

var _child_process = require("child_process");

var path = require('path');

var fs = require('fs'); // Creando función donde evaluaremos, si es absoluta o relativa(true or false).
// export const routeAbsolute = (route) => {
//   let absRoute = path.isAbsolute(route);
//   return absRoute;
// };
// creando función donde convertiremos la ruta relativa a absoluta.


var relativeToAbsolute = function relativeToAbsolute(reltvPath) {
  var convertRelatRout = path.resolve(reltvPath);
  return convertRelatRout;
}; // creando función donde evaluaremos si es un archivo.


exports.relativeToAbsolute = relativeToAbsolute;

var fileOrFolder = function fileOrFolder(pathAbsolute) {
  // convirtiendo la ruta que es string a un objeto(fs.statSync) para que node lo pueda leer y aplicamos los metodos isFile o isDirectory para validar.
  var isThisFile = fs.statSync(pathAbsolute).isFile();
  return isThisFile;
}; // en caso de que la función fileOrFolder resulte true creamos una función que valide si es md o no.


exports.fileOrFolder = fileOrFolder;

var validMd = function validMd(route) {
  // Declaramos una constante y dentro de esta usamos el método path.extname() que extrae solo las extenciones(.md, .js, etc)
  var extsnMd = path.extname(route);
  return extsnMd.toLowerCase() === '.md';
}; // En caso de que la función fileOrFolder resulte false creamos una función que recorra las carpetas.


exports.validMd = validMd;

var recurFolder = function recurFolder(pathAbsFolder) {
  // El método fs.readdirSync tiene la propiedad de leer al directorio
  var readFolder = fs.readdirSync(pathAbsFolder); // esto es un array de strings(archivos md)

  var arrayString = [];
  readFolder.forEach(function (nameFile) {
    var newRoute = path.join(pathAbsFolder, nameFile);

    if (fileOrFolder(newRoute)) {
      if (validMd(newRoute)) {
        arrayString.push(newRoute); // console.log(arrayString);
      }
    } else {
      arrayString = arrayString.concat(recurFolder(newRoute));
    }
  });
  return arrayString;
}; // // Se crea una función para leer los archivos md 
// export const readFile = (pathMd) => {
//   // Este método me retorna buffer(es un objeto; es una representción eficiente de arrays de datos en variedad de formatos )
//   let fileMd = fs.readFileSync(pathMd).toString();
//   return fileMd;
// };
// recurFolder('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links');
// let readFolder = fs.readdirSync('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src').reduce(fs.statSync('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\call-path.js'));
// console.log(readFolder);
// console.log(recurFolder('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src'));
// const cedula = 'v-5555A';// --- cadena a probar
// const regExp = new RegExp(/^([VE]-)?[0-9]{1,8}/i); // --- sin comillas
// const resultado = regExp.test(cedula);
// console.log(resultado);
// console.log(typeof(readFile('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\mds\\ejemplo\\ejemlo.md')));


exports.recurFolder = recurFolder;