const ghpages = require('gh-pages');
const fs = require('fs-extra');

// remove dist directory
console.log('Remove dist directory')
fs.removeSync('dist');

// create dist directory
console.log("Create dist directory");
fs.mkdirSync('dist');

// copy public directory to dist
console.log("Copy public directory to dist");
fs.copySync('public', 'dist/public');

console.log("Copy index.html file to dist");
fs.copySync('index.html', 'dist/index.html');

// publish dist in gh-pages
console.log("Publish dist in gh-pages");
ghpages.publish('dist');