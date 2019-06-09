const arr = [1, 2, 3, 4, 5];
let [x, y, ...rest] = arr;
console.log(x);
console.log(y);
console.log(rest);