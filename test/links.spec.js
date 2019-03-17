import {getTheLinks} from '../src/controll-func/extrac-links.js';
import {validatingLinks} from '../src/controll-func/valid-links.js';
import {calculStats, linksBroken} from '../src/calcul-stats.js';
import {mdLinks} from '../src/md-links.js';
import {cliFunc} from '../src/cli.js';
const objArrLink = [
  { text: 'Link roto muy roto',
    href: 'https://meeeeeeedium.freecodecamp.org/promises-in-',
    file:
 'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\mds\\ejemplo\\ejemlo.md'},
  { text: 'Markdown',
    href: 'https://es.wikipedia.org/wiki/Markdown',
    file: 'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\mds\\ejemplo\\ejemlo.md'
  },
  { text: 'Node.js',
    href: 'https://nodejs.org/khfjhjg',
    file: 'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\mds\\ejemplo\\ejemlo.md'
  }];
const newObjPropiedades = [
  { text: 'Link roto muy roto',
    href: 'https://meeeeeeedium.freecodecamp.org/promises-in-',
    file:
   'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\mds\\ejemplo\\ejemlo.md',
    status: '',
    statusText: 'Not Found' },
  { text: 'Markdown',
    href: 'https://es.wikipedia.org/wiki/Markdown',
    file:
   'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\mds\\ejemplo\\ejemlo.md',
    status: 200,
    statusText: 'OK' },
  { text: 'Node.js',
    href: 'https://nodejs.org/khfjhjg',
    file:
   'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\mds\\ejemplo\\ejemlo.md',
    status: 404,
    statusText: 'Fail' } 
];
const value = `Total:${3}\nUnique:${3}\nBroken:${2}`;
const valueTwo = `Total:${3}\nUnique:${3}`;
  

describe('getTheLinks', () => {
  it('Debería retornar un array de objetos de links', () => {
    const returnLinks = getTheLinks('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src');
    expect(returnLinks).toEqual(objArrLink);
  });
});

describe('validatingLinks', () => {
  it('Debería retornar el objeto con dos propiedades más', (done) => {
    return validatingLinks('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src')
      .then(showLinksObj => expect(showLinksObj).toEqual(newObjPropiedades));
    done(); 
  });
});

describe('calculStats', () => {
  it('Debería retornar el conteo de los links totales y únicos', () => {
    const LinksToAndUniq = calculStats(newObjPropiedades);
    expect(LinksToAndUniq).toEqual(valueTwo);
  });
});
describe('linksBroken', () => {
  it('Debería retornar el conteo de los links rotos', () => {
    const brok = linksBroken(newObjPropiedades);
    expect(brok).toEqual('Broken:2');
  });
});


describe('mdLinks', () => {
  it('Debería retornar el objeto de los links con dos propiedades más', (done) => {
    return mdLinks('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src', {validate: true})
      .then(unitFunc => expect(unitFunc).toEqual(newObjPropiedades));
    done();
  });
  it('Debería retornar el objeto de los links sin las dos propiedades', (done) => {
    return mdLinks('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src', {validate: false})
      .then(unitFunc => expect(unitFunc).toEqual(objArrLink));
    done();
  });
});

describe('cliFunc', () => {
  it('Debería retornar los 3 valores uni, tot, brok', (done) => {
    return cliFunc([,, 'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src', '--validate', '--stats'])
      .then(showVal => expect(showVal).toEqual(value));
    done();
  });
  it('Debería retornar el objeto de links con las propiedades agregadas', (done) => {
    return cliFunc([,, 'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src', '--validate'])
      .then(showVal => expect(showVal).toEqual(newObjPropiedades));
    done();
  });
  it('Debería retornar los 2 valor uni, tot', (done) => {
    return cliFunc([,, 'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src', '--stats'])
      .then(showVal => expect(showVal).toEqual(valueTwo));
    done();
  });
  it('Debería retornar el los objetos con los links sin propiedades agregadas', (done) => {
    return cliFunc([,, 'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src'])
      .then(showVal => expect(showVal).toEqual(objArrLink));
    done();
  });
  
}); 


