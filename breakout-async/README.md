# BREAKOUT - Async Control Flow

### To Do
* [x] Async Flow Review
* [x] Async Return Values
* [x] Questions?

### Async vs Sync
* sync => runs in order and is blocking
* async => non-blocking; gets out the way

```js
console.log('hello');
```

```js
const arr = [1,2,3];
console.log('above');
const filteredArr = arr.filter((element) => { return element > 2; });
console.log('below');
```
