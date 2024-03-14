let obj = {
  a: 1,
  b: undefined,
  c: {
    n: 2
  }
}
Object.defineProperty(obj, 'd', {
  enumerable: false,
  value: 3,
  writable: false,
  configurable: false
});
// console.log(obj.d);
// console.log(Object.keys(obj));


function hasProperty(obj, key) {
  // return obj[key] !== undefined   // 值为undefined的属性就判断不了
  // return Object.keys(obj).includes(key)  // 属性为不可枚举时，判断不了
  // return obj.hasOwnProperty(key)  // 只能判断显示属性

  return key in obj
}

console.log(hasProperty(obj, 'b')); // false