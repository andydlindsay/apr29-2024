const nums = [42, 675, 500, 1500, 1750, 1600];

for (const num of nums) {
  setTimeout(() => {
    console.log(`${num}ms`);
  }, num);
}
