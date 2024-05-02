// arrow funcs were added in 2015 (ES6)
// advantages of arrow functions
// 1. no more function keyword yay!!!
// 2. if only one argument, no need for parens
// 3. if only one line of code, no need for curly braces
// 4. if no curly braces, the line of code is implicitly returned
// 5. arrow funcs DO NOT create `this`

// implicit => we don't ask for it to happen
// explicit => we ask for it to happen

const sayHello1 = function anotherName(name) {
  return `hello there ${name}`;
};

const sayHello2 = name => `hello there ${name}`;

const result = sayHello2('carol');
console.log('result', result);


