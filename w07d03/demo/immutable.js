// const arr = [1,2,3];
// const another = [4,5,6];

// const copy = [ ...arr, 4 ];

// // copy.push(4);

// console.log(arr);
// console.log(copy);

const myObj = {
  username: 'alice',
  age: 42,
  faveFoods: ['waffles'],
};

const copy = {
  ...myObj,
  username: 'bob',
  faveFoods: [
    ...myObj.faveFoods,
    'potato chips',
  ]
};

// copy.faveFoods.push('potato chips');

// copy.username = 'bob';

console.log(myObj);
console.log(copy);
