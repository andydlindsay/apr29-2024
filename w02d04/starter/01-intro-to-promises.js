const generatePromise = (name, rejects = false, delay = 1000) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (rejects) {
        return reject(name); // unhappy path; it calls our .catch
      }
      resolve(name); // happy path; it calls our .then
    }, delay);
  });
};

const boilWater = () => {
  return new Promise((resolve, reject) => {
    console.log("Starting to boil the water");
    setTimeout(() => {
      console.log("Water is boiling");
      resolve();
    }, 2000);
    // return reject("Over broke");
  });
};

// is a function that returns a promise (objects)
// takes in a value and returns the same value

// const promise = generatePromise('promise one', true);

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('promise failed specatcularly');
    // resolve('happy path');
  }, 1000);
});

console.log(promise);

promise
  .then((resolvedValue) => { console.log(resolvedValue) })
  // .then((resolvedValue) => { console.log(resolvedValue) })
  // .then((resolvedValue) => { console.log(resolvedValue) })
  .catch((errMessage) => { console.log('promise failed', errMessage) })

// promise.then((resolvedValue) => {
//   console.log('resolvedValue', resolvedValue);
// });

// promise.catch((errMessage) => {
//   console.log('errMessage', errMessage);
// })

// setTimeout(() => {
//   console.log(promise); // sat 2pm
// }, 2000);
