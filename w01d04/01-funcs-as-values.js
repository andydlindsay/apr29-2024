// function declaration
// function sayHello() {
//   console.log('hello there');
// }



// function expression
const sayHello = function() {
  console.log('hello there');
};

// sayHello();

// functions are objects

// console.log(sayHello()); // undefined
// console.log(sayHello); // [Function: sayHello]

// console.log(sayHello.toString());

// sayHello.secretMessage = 'does this work???';

// console.log(sayHello);

const funcs = [];

funcs.push(sayHello);
funcs.push(console.log);

console.log(funcs);

funcs[1]('show this') // console.log()
