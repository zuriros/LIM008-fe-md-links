import {getTheLinks} from '../src/controll-func/extrac-links.js';
import {validatingLinks} from '../src/controll-func/valid-links.js';
import {calculStats, linksBroken} from '../src/calcul-stats.js';
import {mdLinks} from '../src/md-links.js';
import {cliFunc} from '../src/controll-func/cli-func.js';
const path = require('path');
const linuxPath = path.resolve(`${process.cwd()}/src`);
const objArrLink = [
  { text: 'Link roto muy roto',
    href: 'https://meeeeeeedium.freecodecamp.org/promises-in-',
    file:
    path.resolve(`${process.cwd()}/src/mds/ejemplo/ejemlo.md`)},
  { text: 'Markdown',
    href: 'https://es.wikipedia.org/wiki/Markdown',
    file: path.resolve(`${process.cwd()}/src/mds/ejemplo/ejemlo.md`)
  },
  { text: 'Node.js',
    href: 'https://nodejs.org/khfjhjg',
    file: path.resolve(`${process.cwd()}/src/mds/ejemplo/ejemlo.md`)
  }];

const stringArr =
`${path.resolve(`${process.cwd()}/src/mds/ejemplo/ejemlo.md`)} https://meeeeeeedium.freecodecamp.org/promises-in- Link roto muy roto
${path.resolve(`${process.cwd()}/src/mds/ejemplo/ejemlo.md`)} https://es.wikipedia.org/wiki/Markdown Markdown
${path.resolve(`${process.cwd()}/src/mds/ejemplo/ejemlo.md`)} https://nodejs.org/khfjhjg Node.js`;

const newStringArr = 
`${path.resolve(`${process.cwd()}/src/mds/ejemplo/ejemlo.md`)} https://meeeeeeedium.freecodecamp.org/promises-in-  Not Found Link roto muy roto
${path.resolve(`${process.cwd()}/src/mds/ejemplo/ejemlo.md`)} https://es.wikipedia.org/wiki/Markdown 200 OK Markdown
${path.resolve(`${process.cwd()}/src/mds/ejemplo/ejemlo.md`)} https://nodejs.org/khfjhjg 404 Fail Node.js`;

const newObjPropiedades = [
  { text: 'Link roto muy roto',
    href: 'https://meeeeeeedium.freecodecamp.org/promises-in-',
    file:
    path.resolve(`${process.cwd()}/src/mds/ejemplo/ejemlo.md`),
    status: '',
    statusText: 'Not Found' },
  { text: 'Markdown',
    href: 'https://es.wikipedia.org/wiki/Markdown',
    file:
    path.resolve(`${process.cwd()}/src/mds/ejemplo/ejemlo.md`),
    status: 200,
    statusText: 'OK' },
  { text: 'Node.js',
    href: 'https://nodejs.org/khfjhjg',
    file:
    path.resolve(`${process.cwd()}/src/mds/ejemplo/ejemlo.md`),
    status: 404,
    statusText: 'Fail' } 
];
const value = `Total:${3}\nUnique:${3}\nBroken:${2}`;
const valueTwo = `Total:${3}\nUnique:${3}`;
  

describe('getTheLinks', () => {
  it('Debería retornar un array de objetos de links', () => {
    const returnLinks = getTheLinks(linuxPath);
    expect(returnLinks).toEqual(objArrLink);
  });
});

describe('validatingLinks', () => {
  it('Debería retornar el objeto con dos propiedades más', () => {
    return validatingLinks(linuxPath)
      .then(showLinksObj => expect(showLinksObj).toEqual(newObjPropiedades));
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
  it('Debería retornar el objeto de los links con dos propiedades más', () => {
    return mdLinks(linuxPath, {validate: true})
      .then(unitFunc => expect(unitFunc).toEqual(newObjPropiedades));
  });
  it('Debería retornar el objeto de los links sin las dos propiedades', () => {
    return mdLinks(linuxPath, {validate: false})
      .then(unitFunc => expect(unitFunc).toEqual(objArrLink));
  });
});

describe('cliFunc', () => {
  it('Debería retornar los 3 valores uni, tot, brok', () => {
    return cliFunc([,, linuxPath, '--validate', '--stats'])
      .then(showVal => expect(showVal).toEqual(value));
  });
  it('Debería retornar el objeto de links con las propiedades agregadas', () => {
    return cliFunc([,, linuxPath, '--validate'])
      .then(showVal => expect(showVal).toEqual(newStringArr));
  });
  it('Debería retornar los 2 valor uni, tot', () => {
    return cliFunc([,, linuxPath, '--stats'])
      .then(showVal => expect(showVal).toEqual(valueTwo));
  });
  it('Debería retornar el los objetos con los links sin propiedades agregadas', () => {
    return cliFunc([,, linuxPath])
      .then(showVal => expect(showVal).toEqual(stringArr));
  });
}); 


