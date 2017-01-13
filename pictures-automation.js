var fs = require('fs');
var _ = require('lodash');
var jsonPath = './src/pictures.json';
var picturesPath = './src/images/photos/';
var jsonData = {};
// This is the URL that will be used for the pictures to load
var relativeUrl = './';

var categories = fs.readdirSync(picturesPath);
categories.forEach(function(category) {
  jsonData[category] = fs
    .readdirSync(picturesPath + category)
    .map(function(picture) {
      return relativeUrl + picture;
    });
});

fs.writeFile(jsonPath, JSON.stringify(jsonData, null, 2), function(error) {
  if (error) {
    console.log(`write error: ${error}`);
  } else {
    console.log('write to pictures.json successful');
  }
});