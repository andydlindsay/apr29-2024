"use strict";
// name, args (callback), return value
const sayHello = (name, age = 100) => {
    return `hello there ${name}`;
};
const returnVal1 = sayHello('bob', 42);
const returnVal2 = sayHello('bob');
const returningPromise = (num) => {
    return new Promise((resolve, reject) => {
        resolve('hello world');
    });
};
returningPromise(100)
    .then((data) => { });
