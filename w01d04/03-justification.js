// SRP Single Responsibility Principle => our code should be responsible for only one thing

const loopThroughArray = function(arr, callback) {
  // loop through the array
  for (const element of arr) {
    // do something with each element
    // console.log('the element is', element);
    callback(element);
  }
};

const doOnEachLoopNames = function(name) {
  console.log(`hello there ${name}`);
};

const names = ['alice', 'bob', 'carol'];

loopThroughArray(names, doOnEachLoopNames);

const doOnEachLoopNums = function(num) {
  console.log(num * 2);
};

const nums = [1,2,3,4];
// loopThroughArray(nums, doOnEachLoopNums);

nums.forEach(doOnEachLoopNums);
