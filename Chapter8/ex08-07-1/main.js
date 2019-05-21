const arr = [1, null, "hello", "world", true, undefined];
delete arr[3];
let result = arr.join();
console.log(result);
result = arr.join('');
console.log(result);
result = arr.join(' -- ');
console.log(result);