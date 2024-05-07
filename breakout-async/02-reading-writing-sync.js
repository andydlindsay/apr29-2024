const fs = require('fs');

const fileOneContents = fs.readFileSync('./first.html', 'utf-8');

const fileTwoContents = fs.readFileSync('./second.html', 'utf-8');

const lengthOne = fileOneContents.length;
const lengthTwo = fileTwoContents.length;

const sum = lengthOne + lengthTwo;

// console.log(lengthOne);
// console.log(lengthTwo);
// console.log('sum', sum);

fs.writeFileSync('./sum.txt', `The two files add up to: ${sum}`);
console.log('all done!');
