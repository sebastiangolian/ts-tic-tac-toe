const ghpages = require('gh-pages');
const fs = require('fs-extra');

// remove dist directory
fs.remove('dist', err => {
   if (err) return console.error(err)
   console.log('Remove dist directory')
})

// create dist directory
fs.mkdir('dist',function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("Create dist directory");
});

// copy public directory to dist
fs.copy('public', 'dist/public', function (err) {
   if (err) {
      console.error(err);
   } else {
      console.log("Copy public directory to dist");
   }
});

fs.copy('index.html', 'dist/index.html', function (err) {
   if (err) {
      console.error(err);
   } else {
      console.log("Copy index.html file to dist");
   }
});

// publish dist in gh-pages
ghpages.publish('dist', function(err) {
   console.log("Publish dist in gh-pages");
});