// EVERY .then returns a promise
// EVERY .catch returns a promise
const promiseOne = new Promise((resolve, reject) => {
  // resolve('promise was successful');
  reject('oops something bad happened');
});

// const promiseTwo = promiseOne.then((value) => {
//   console.log('value', value);
// })

// promiseTwo.then(() => {
//   console.log('inside the .then of promiseTwo');
// });

promiseOne
  .then((value) => {
    console.log('value', value);
    
    const newPromise = new Promise((resolve) => {
      resolve('the new promise worked!!');
    });

    return newPromise;
  })
  .catch((errMessage) => {
    console.log('promise failed', errMessage);
    return 'Toronto will be sunny today'
  })
  .then((data) => {
    console.log('inside the .then of promiseTwo', data);
    return data;
  })
  .then((data) => {
    console.log('inside promise three', data);
  })
  .catch((errMessage) => {
    console.log('error', errMessage);
  })

// const arr = [1,2,3]
// const filtered = arr.filter(element => element < 2) // [2,3]
// const mapped = filtered.map(element => element * 2) // [4, 6]

// arr
//   .filter()
//   .map(element => element * 2)
//   .reduce()
