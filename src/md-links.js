// import { resolve } from 'dns';
import {recurFolder, relativeToAbsolute} from './controll-func/call-path.js';
import {getTheLinks} from './controll-func/extrac-links.js';
import {validatingLinks} from './controll-func/valid-links.js';
// import { doesNotReject } from 'assert';
export const mdLinks = (path, option) => {
  // llamamos a la función que convierte la ruta a absoluta.
  const pathAbsol = relativeToAbsolute(path);
  // creamos la nueva promesa 
  return new Promise((resolve) => {
    // si el usuario ingresa la opción validate  
    if (option.validate) {
      resolve(validatingLinks(pathAbsol));
    } else {
      resolve(getTheLinks(pathAbsol));
      // console.log(getTheLinks(recurFolder('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src')));
    }
  });
};


// mdLinks('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src', {validate: true}).then(res => console.log(res));


