const util = require('util')

const obj = {
  a: 1,
  b: {
    c: 2,
    d: [3, 4, 5],
    e: () => {
      console.log(6);
    }
  }
}

// console.log(util.inspect(obj, {depth: Infinity}));

// console.log(util.format('%s:%s', 'foo', 'bar'));
// console.log(util.format('%d + %d = %d', 1, 2, 3));
// console.log(util.format('hello %j', {name: 'Tom'}));

console.log(util.types.isArrayBuffer([]));
console.log(util.types.isDate(new Date()));