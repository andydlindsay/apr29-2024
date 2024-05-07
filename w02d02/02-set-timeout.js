// console.log('top of file');

// async code cannot run until all sync code is done

const something = setTimeout(() => {
  console.log('inside the timeout');
});

console.log(something);

console.log('bottom of the file');
