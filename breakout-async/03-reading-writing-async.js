const fs = require('fs');

let lengthOne = 0;
let lengthTwo = 0;

// fs.readFile('./first.html', 'utf-8', (err, fileOneContents) => {
//   // console.log(fileOneContents);
//   lengthOne = fileOneContents.length;
// });

// fs.readFile('./second.html', 'utf-8', (err, fileTwoContents) => {
//   // console.log(fileTwoContents);
//   lengthTwo = fileTwoContents.length;
// });

fs.readFile('./first.html', 'utf-8', (err, fileOneContents) => {
  // console.log(fileOneContents);
  lengthOne = fileOneContents.length;

  fs.readFile('./second.html', 'utf-8', (err, fileTwoContents) => {
    // console.log(fileTwoContents);
    lengthTwo = fileTwoContents.length;

    const sum = lengthOne + lengthTwo;
    console.log('sum', sum);

    fs.writeFile('./sum-async.txt', `the sum is ${sum}`, (err) => {
      console.log('it is really done now');
    });
  });
});

console.log('all done!');
