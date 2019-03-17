
export const calculStats = (dataObjLink) => {
  // // llamando a la función array de objetos
  const totalLinks = dataObjLink.length;
  // aplicamos ...new Set() es unaa propiedad que filtra solo los únicos
  const uniqueLinks = [...new Set(dataObjLink.map(res => res.href))].length;
  return `Total:${totalLinks}\nUnique:${uniqueLinks}`;
};

export const linksBroken = (dataObjLink) => {
  const prue = dataObjLink.filter(propObj => propObj.statusText === 'Fail' || propObj.statusText === 'Not Found');
  return `Broken:${prue.length}`;  
};

export const unitCalcBrok = (dataObjLink) => {
  return calculStats(dataObjLink).concat('\n', linksBroken(dataObjLink));
};
// const newObjPropiedades = [
//   { text: 'Link roto muy roto',
//     href: 'https://meeeeeeedium.freecodecamp.org/promises-in-',
//     file:
//    'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\mds\\ejemplo\\ejemlo.md',
//     status: '',
//     statusText: 'Not Found' },
//   { text: 'Markdown',
//     href: 'https://es.wikipedia.org/wiki/Markdown',
//     file:
//    'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\mds\\ejemplo\\ejemlo.md',
//     status: 200,
//     statusText: 'OK' },
//   { text: 'Node.js',
//     href: 'https://nodejs.org/khfjhjg',
//     file:
//    'C:\\Users\\Laboratoria\\Documents\\LIM008-fe-md-links\\src\\mds\\ejemplo\\ejemlo.md',
//     status: 404,
//     statusText: 'Fail' } ];


//  console.log(unitCalcBrok(newObjPropiedades));


