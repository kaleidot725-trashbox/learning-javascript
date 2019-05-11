let arr = [1, 2, 3];
let arr2 = arr.concat(4, 5, 6);
console.log(arr);
console.log(arr2);

arr2 = arr.concat([4, 5, 6]);
console.log(arr2);

arr2 = arr.concat([4, 5], 6);
console.log(arr2);

arr2 = arr.concat([4, 5], [6, 7]);
console.log(arr2);

arr2 = arr.concat([4, [5, 6]]);
console.log(arr2);