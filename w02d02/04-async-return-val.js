// async functions do not have return values
const higherOrderFn = (callback) => {
  const user = {
    username: 'alice',
  };

  console.log('1. before the timeout call');

  setTimeout(() => {
    user.username = 'bob';
    console.log('3. inside the timeout');
    callback(user);
  }, 3000);

  console.log('2. after the timeout call');
};

console.log('4. before the main call');

higherOrderFn((updatedUser) => {
  console.log('6. inside the callback');
  console.log('updatedUser', updatedUser);
});

console.log('5. after the main call');

// 124536
