let arr = [1, 5, 7];
let arr2 = arr.splice(1, 0, 2, 3, 4);
console.log(arr);
console.log(arr2);

arr2 = arr.splice(5, 0, 6);
console.log(arr);
console.log(arr2);

arr2 = arr.splice(1, 2);
console.log(arr);
console.log(arr2);

arr2 = arr.splice(2, 1, 'a', 'b');
console.log(arr);
console.log(arr2);