import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
fs.mkdirSync('public',{recursive:true});
execFileSync(process.execPath,['node_modules/tailwindcss/lib/cli.js','-i','styles.css','-o','public/styles.css','--minify'],{stdio:'inherit'});
fs.copyFileSync('app.js','public/app.js');
console.log('Built Confidence Bank');
