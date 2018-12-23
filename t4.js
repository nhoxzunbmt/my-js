const sn30s = require('30-seconds-of-code')
const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1
};
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo'
};
var a = sn30s.merge(object, other);
console.log(a,{...object,...other});
