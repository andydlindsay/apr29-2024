const ourMap = function(arr, callback) {
  // create a new array
  const output = [];

  // loop through the provided array
  for (const element of arr) {
    // call the provided callback with the element AND capture the return value
    const returnVal = callback(element); // callback('alice')

    // put the return value into the new array
    output.push(returnVal);
  }

  // return the new array
  return output;
};

const ourCallback = function(name) {
  const newStr = `<h1>You are logged in as ${name}</h1>`;
  return newStr;
};

const names = ['alice', 'bob', 'carol'];

const mappedNames = ourMap(names, ourCallback);
console.log('names', names);
console.log('mappedNames', mappedNames);

const builtInMap = names.map(ourCallback);

console.log('builtInMap', builtInMap);
