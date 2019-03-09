
import {routeAbsolute, relativeToAbsolute, fileOrFolder, validMd, recurFolder} from '../src/call-path.js';

const routeAbsEntered = '/home/fulano/imagen.jpg';
const routeRelEntered = '~/imagen.jpg';
const routeOfDeskpot = 'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\~\\imagen.jpg';

describe('routeAbsolute', () => {
  // Los valores booleanos true y false, son por el método path.isAbsolute, el cual retorna valores booleanos.
  it('my route is absolute, true', () => {
    const route = routeAbsolute(routeAbsEntered);
    expect(route).toBe(true);
  });
  it('my route is absolute, false', () => {
    const route = routeAbsolute(routeRelEntered);
    expect(route).toBe(false);
  });
});

describe('relativeToAbsolute', () => {
  it('changing relative path to absolute', () => {
    const routeRelat = relativeToAbsolute(routeRelEntered);
    expect(routeRelat).toBe(routeOfDeskpot);
  });
});
// Recordar que los métodos retornan booleanos
describe('fileOrFolder', () => {
  it('should validate it is a file or folder', () => {
    const validateFile = fileOrFolder('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links');
    expect(validateFile).toBe(false);
  });
  it('should validate it is a file or folder', () => {
    const validateFile = fileOrFolder('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\call-path.js');
    expect(validateFile).toBe(true);
  });
});
describe('validMd', () => {
  it('Debería regresar la ruta con la extención md', () => {
    const validFileMd = validMd('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\call-path.md');
    expect(validFileMd).toEqual(true);
  });
  it('Debería regresar la ruta sin la extención md', () => {
    const validFileMd = validMd('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\call-path.js');
    expect(validFileMd).toEqual(false);
  });
});
describe('recurFolder', () => {
  it('debería retornar un array de strings md', () => {
    const returnStrings = recurFolder('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src');
    expect(returnStrings).toEqual(['C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\mds\\ejemplo\\ejemlo.md']);
  });
});

