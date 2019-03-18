// import { fstatSync, promises } from 'fs';
// import { exec } from 'child_process';
import {getTheLinks} from './extrac-links.js';
const fetch = require('node-fetch');

// Se crea la función que validará los links extraidos.
export const validatingLinks = (pathArr) => {
  const arrObjLinks = getTheLinks(pathArr);
  const getAllLinks = arrObjLinks.map(linkObj => new Promise((resolve) => fetch(linkObj.href)
    // el then te dvuelve un objeto llamado response dentro de este se ubica a status(200) y statustext('ok')
    .then((res) => {
      if (res.status >= 200 && res.status < 400) {
        linkObj.status = res.status;
        linkObj.statusText = res.statusText;
        resolve(linkObj);
      } else {
        linkObj.status = res.status;
        linkObj.statusText = 'Fail';
        resolve(linkObj);
      }
    })
    .catch(() => {
      linkObj.status = '';
      linkObj.statusText = 'Not Found';
      resolve(linkObj);
    })
  )
  );
  return Promise.all(getAllLinks);
};

console.log(validatingLinks('C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src').then(sec => console.log(sec)));

 