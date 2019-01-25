const fs = require('fs-extra');

// remove dist directory
console.log('Remove public/js directory')
fs.removeSync('public/js');