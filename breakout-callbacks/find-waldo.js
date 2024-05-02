const names = ['alice', 'bob', 'elise', 'dean', 'waldo', 'carol'];

const findWaldo = function(names, callback) {
  // loop through the names
  for (let index = 0; index < names.length; index++) {
  // for (const name of names) {
    // is the name equal to "waldo"
    const name = names[index];
    if (name === 'waldo') {
      callback(index); // runWhenWaldoFound(42)
    }
  }
};

const runWhenWaldoFound = function(mySecretValue) {
  console.log('waldo is found at index', mySecretValue);
};

findWaldo(names, runWhenWaldoFound);
