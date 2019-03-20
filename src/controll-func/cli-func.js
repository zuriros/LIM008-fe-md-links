import {mdLinks} from '../md-links.js';
import {calculStats, linksBroken, unitCalcBrok} from '../calcul-stats.js';
import {validatingLinks} from './valid-links.js';

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