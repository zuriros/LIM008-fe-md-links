#!/usr/bin/env node
import {mdLinks} from './md-links.js';
import {calculStats, linksBroken, unitCalcBrok} from './calcul-stats.js';
import {validatingLinks} from './controll-func/valid-links.js';
const prosArg = process.argv;
// ['C:\\Program Files\\nodejs\\node.exe','C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\lib\\cli.js','user\route', option]
//  console.log(prosArg);

export const cliFunc = (prosArg) => {
  return new Promise((resolve) => {
    // La condición del if retorna un booleano, este caso se da cuando el usuario ingresa --v y --st
    if ((prosArg.includes('--validate') || prosArg.includes('--v')) && (prosArg.includes('--stats') || prosArg.includes('--s'))) {
      mdLinks(prosArg[2], {validate: true, stats: true}).then(showProm => resolve(unitCalcBrok(showProm)));
    } else if (prosArg.includes('--validate') || prosArg.includes('--v')) {
      mdLinks(prosArg[2], {validate: true, stats: false}).then(showProm => resolve(showProm));
    } else if (prosArg.includes('--stats') || prosArg.includes('--s')) {
      mdLinks(prosArg[2], {validate: false, stats: true}).then(showProm => resolve(calculStats(showProm)));
    } else {
      mdLinks(prosArg[2], {validate: false, stats: false}).then(showProm => resolve(showProm));
    }
  });
};

cliFunc(process.argv).then(show => console.log(show));

