const fs = require('fs-extra');

console.log('Remove dist directory')
fs.removeSync('dist');

console.log('Remove public/js directory')
fs.removeSync('public/js');