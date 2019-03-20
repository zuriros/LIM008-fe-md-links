// import { fstatSync } from 'fs';
// import { exec } from 'child_process';

const path = require('path');
const fs = require('fs');
import {recurFolder} from './call-path.js';

// Se crea una función que extraerá los links.
export const getTheLinks = (pathAbsFilOrFold) => {
  let arrObjLinks = [];
  const funcPathsArr = recurFolder(pathAbsFilOrFold);
  const applyingRegEx = /(^|[^!])\[(.+)\]\((.+)\)/gm;
  funcPathsArr.forEach((pathFileMd) => {
    let fileMd = fs.readFileSync(pathFileMd).toString();
    // Se aplica el método exec, este te devuelve un objeto
    let getLinks = applyingRegEx.exec(fileMd);
    while (getLinks !== null) {
      arrObjLinks.push({
        text: getLinks[2],
        href: getLinks[3].slice(0, 50),
        file: pathFileMd   
      });
      // Esta linea actualiza getLinks y sigue su recorrido.
      getLinks = applyingRegEx.exec(fileMd);
    }
  });
  return arrObjLinks;
};