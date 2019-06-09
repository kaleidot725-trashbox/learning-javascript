const arr = [1, 2, 3, 4, 5];
delete arr[2];
console.log(arr);
const result = arr.map(x => 0);
console.log(result);
console.log(result[2]);