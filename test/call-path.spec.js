
import {routeAbsolute, relativeToAbsolute, fileOrFolder, validMd, recurFolder, readFile} from '../src/controll-func/call-path.js';
const path = require('path');
const routeAbsEntered = '/home/fulano/imagen.jpg';
const routeRelEntered = 'src';
const routeOfDeskpot = path.resolve(`${process.cwd()}/src`);
 console.log(routeOfDeskpot);
// C:\Users\Laboratoria\Documents\LIM008-fe-md-links\src
//console.log(routeRelEntered);
//C:\Users\Laboratoria\Documents\LIM008-fe-md-links\src

 //console.log(relativeToAbsolute(routeRelEntered));
// C:\Users\Laboratoria\Documents\LIM008-fe-md-links\src

// describe('routeAbsolute', () => {
//   // Los valores booleanos true y false, son por el método path.isAbsolute, el cual retorna valores booleanos.
//   it('my route is absolute, true', () => {
//     const route = routeAbsolute(routeAbsEntered);
//     expect(route).toBe(true);
//   });
//   it('my route is absolute, false', () => {
//     const route = routeAbsolute(routeRelEntered);
//     expect(route).toBe(false);
//   });
// });

describe('relativeToAbsolute', () => {
  it('changing relative path to absolute', () => {
    const routeRelat = relativeToAbsolute(routeRelEntered);
    expect(routeRelat).toBe(routeOfDeskpot);
  });
});
// Recordar que los métodos retornan booleanos
describe('fileOrFolder', () => {
  it('should validate it is a file or folder', () => {
    const validateFile = fileOrFolder(path.resolve(`${process.cwd()}`));
    expect(validateFile).toBe(false);
  });
  it('should validate it is a file or folder', () => {
    const validateFile = fileOrFolder(path.resolve(`${process.cwd()}/src/controll-func/call-path.js`));
    expect(validateFile).toBe(true);
  });
});
describe('validMd', () => {
  it('Debería regresar la ruta con la extención md', () => {
    const validFileMd = validMd(path.resolve(`${process.cwd()}/src/call-path.md`));
    expect(validFileMd).toEqual(true);
  });
  it('Debería regresar la ruta sin la extención md', () => {
    const validFileMd = validMd(path.resolve(`${process.cwd()}/src/call-path.js`));
    expect(validFileMd).toEqual(false);
  });
});
describe('recurFolder', () => {
  it('debería retornar un array de strings md', () => {
    const returnStrings = recurFolder(path.resolve(`${process.cwd()}/src`));
    expect(returnStrings).toEqual([ path.resolve(`${process.cwd()}/src/mds/ejemplo/ejemlo.md`),
      path.resolve(`${process.cwd()}/src/mds/ejemplo/texto.md`)]);
  });
});
// describe('readFile', () => {
//   it('Debería retornar el contenido del archivo que es un string', () => {
//     const returnReadFile = readFile(`${process.cwd()}\\src\\mds\\ejemplo\\texto.md');
//     expect(returnReadFile).toBe('# Markdown Links');
//   });
// });


