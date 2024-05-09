// first 1000ms
// second 2000ms
// third 3000ms

// how long does the user have to wait?

const promiseGenerate = (name, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(`${name} promise succeeded`);
      reject('bad stuff happened');
    }, delay);
  })
};

const promiseOne = promiseGenerate('first', 1000);
const promiseTwo = promiseGenerate('second', 2000);
const promiseThree = promiseGenerate('third', 3000);

const promises = [promiseThree, promiseOne, promiseTwo];

Promise.all(promises)
  .then((arrOfResolvedValues) => {
    console.log(arrOfResolvedValues);
  })
  .catch((err) => {
    console.log(err);
  });

// promiseOne
//   .then((data) => {
//     console.log(data);

//     const promiseTwo = promiseGenerate('second', 2000);
//     return promiseTwo;
//   })
//   .then((data) => {
//     console.log(data);

//     const promiseThree = promiseGenerate('third', 3000);
//     return promiseThree;
//   })
//   .then((data) => {
//     console.log(data);
//   });
