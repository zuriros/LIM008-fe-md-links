#!/usr/bin/env node
import { cliFunc } from './controll-func/cli-func.js';
const prosArg = process.argv;
cliFunc(prosArg).then(show => console.log('desde afuera', show));

// 'C:\Users\Laboratoria\Documents\LIM008-fe-md-links\src\md-links.js' 
