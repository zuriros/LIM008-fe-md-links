import { fstatSync } from 'fs';
import { exec } from 'child_process';

const path = require('path');
const fs = require('fs');
// Creando función donde evaluaremos, si es absoluta o relativa(true or false).
export const routeAbsolute = (route) => {
  let absRoute = path.isAbsolute(route);
  return absRoute;
};
// creando función donde convertiremos la ruta relativa a absoluta.
export const relativeToAbsolute = (reltvPath) => {
  let convertRelatRout = path.resolve(reltvPath);
  return convertRelatRout;
};
// creando función donde evaluaremos si es un archivo.
export const fileOrFolder = (pathAbsolute) => {
  // convirtiendo la ruta que es string a un objeto(fs.statSync) para que node lo pueda leer y aplicamos los metodos isFile o isDirectory para validar.
  let isThisFile = fs.statSync(pathAbsolute).isFile();
  return isThisFile;
};
// en caso de que la función fileOrFolder resulte true creamos una función que valide si es md o no.
export const validMd = (route) => {
  // Declaramos una constante y dentro de esta usamos el método path.extname() que extrae solo las extenciones(.md, .js, etc)
  let extsnMd = path.extname(route);
  return extsnMd === '.md';
};
// En caso de que la función fileOrFolder resulte false creamos una función que recorra las carpetas.
export const recurFolder = (pathAbsFolder) => {
  // El método fs.readdirSync tiene la propiedad de leer al directorio
  let readFolder = fs.readdirSync(pathAbsFolder);
  let arrayString = [];
  readFolder.forEach((nameFile) => {
    const newRoute = path.join(pathAbsFolder, nameFile);
    if (fileOrFolder(newRoute)) {
      if (validMd(newRoute)) {
        arrayString.push(newRoute);
        // console.log(arrayString);
      }
    } else {
      arrayString = arrayString.concat(recurFolder(newRoute));
    }
  });
  return arrayString;
};

// recurFolder('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links');
// let readFolder = fs.readdirSync('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src').reduce(fs.statSync('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\call-path.js'));
// console.log(readFolder);
// console.log(recurFolder('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src'));
const cedula = 'V-11122233';// --- cadena a probar
const regExp = newRegExp(/[VE]-[0-9]{1,8}/); // --- sin comillas
const resultado = regExp.test(cedula);
console.log(resultado);

