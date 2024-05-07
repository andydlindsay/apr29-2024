const fs = require('fs');

fs.readFile('./some-file.html', 'utf-8', (err, fileContents) => {
  if (err) {
    console.log(err);
  }

  console.log('fileContents', fileContents.length);
});
