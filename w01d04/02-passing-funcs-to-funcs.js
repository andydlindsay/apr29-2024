// callback => function that we pass to another function to be invoked/called by that function
// higher order function (HOF) => a function that accepts a function as an argument

const runMyFunc = function(callback) {
  console.log(callback); // console.log(sayHello)

  callback('bob'); // console.log('bob');
};

const name = 'alice';

const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

sayHello(name);

const addTwo = function(num) {
  console.log(num + 2);
};

runMyFunc(sayHello);

runMyFunc(console.log);

runMyFunc(addTwo);
