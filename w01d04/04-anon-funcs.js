// const username = 'dean';
// const age = 42;

// console.log(age);

// console.log(84); // anonymous

const runMyFunc = function(callback) {
  callback('bob');
};

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

runMyFunc(sayHello);

// naming things is hard

runMyFunc(function(name) {
  console.log(`hello there ${name}`);
});
