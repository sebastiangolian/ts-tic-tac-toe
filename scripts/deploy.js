const ghpages = require('gh-pages');
const fs = require('fs-extra');

console.log("Create dist directory");
fs.mkdirSync('dist');

console.log("Copy public directory to dist");
fs.copySync('public', 'dist/public');

console.log("Copy index.html file to dist");
fs.copySync('index.html', 'dist/index.html');

console.log("Publish dist in gh-pages");
ghpages.publish('dist');