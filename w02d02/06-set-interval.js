// setInterval creates a recurring interval

let count = 10;

const interval = setInterval(() => {
  console.log('count', count);
  count -= 1;

  if (count === 0) {
    clearInterval(interval);
    console.log('game over');
  }
}, 1000);
