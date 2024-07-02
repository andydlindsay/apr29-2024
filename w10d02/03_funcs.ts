// name, args (callback), return value

const sayHello = (name: string, age: number = 100): string => {
  return `hello there ${name}`;
};

const returnVal1 = sayHello('bob', 42);
const returnVal2 = sayHello('bob');

const returningPromise = (num: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    resolve('hello world');
  });
};

returningPromise(100)
  .then((data) => {})
  