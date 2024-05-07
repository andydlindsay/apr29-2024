// console.log(new Date());

setTimeout(() => {
  console.log('timeout one');
}, 1);

setTimeout(() => {
  console.log('timeout two');
}, 1);

setTimeout(() => {
  for (let i = 0; i < 100; i++) {
    console.log(new Date());
  }
}, 1);
