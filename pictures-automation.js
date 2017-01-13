var fs = require('fs');

fs.writeFile('./src/pictures.json', 'Hello world!', function(error) {
  if (error) {
    console.log(`write error: ${error}`);
  } else {
    console.log('write to pictures.json successful');
  }
})