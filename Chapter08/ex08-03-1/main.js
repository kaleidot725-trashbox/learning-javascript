const o = { name: "ジェリー" };
const arr = [1, 5, "a", o, true, 5, [1, 2], "9"];

console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5));
console.log(arr.indexOf("a"));
console.log(arr.indexOf({ name: "ジェリー"}));
console.log(arr.indexOf(o));
console.log(arr.indexOf([1, 2]));
console.log(arr.indexOf("9"));
console.log(arr.indexOf(9));

console.log(arr.indexOf("a", 5));
console.log(arr.indexOf(5, 5));
console.log(arr.lastIndexOf(5, 4));
console.log(arr.lastIndexOf(true, 3));