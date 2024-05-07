setTimeout(() => {
  console.log('1. inside timeout one');
}, 3000);

setTimeout(() => {
  console.log('2. inside timeout two');
}, 2000);

console.log('bottom of the file');
