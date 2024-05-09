# W02D04 - Promises

### To Do
- [x] Illustrate the "callback waterfall" (callback hell) problem
- [x] Introduction to Promises
- [x] Error handling with Promises (vs callbacks)
- [x] Parallelizing async things (Promise.all)
- [x] Creating our own Promises

```js
higherOrderFn((err, dataOne) => {
  if (err) {
    // handle err
  }
  higherOrderFn((err, dataTwo) => {
    if (err) {
      // handle err
    }
    higherOrderFn((err, dataThree) => {
      if (err) {
        // handle err
      }
      // do something with data
    })
  })
})
```

### Promise
* represents a future value
* objects
* one of three states:
  * pending
  * fulfilled
  * rejected/failed
* you will not create your own promises
* they will be return values from function calls

thurs night
moving on sat noon















