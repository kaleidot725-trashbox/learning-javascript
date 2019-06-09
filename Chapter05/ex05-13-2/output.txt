const nums = [ 3, 5, 15, 7, 5 ];
let n, i=0;

while(i < nums.length && (n = nums[i++]) < 10) {
    console.log(`10より小さい数字を発見:${n}`);
}

console.log(`10より大きい数字を発見 : ${n}`);
console.log(`未チェックの数字の個数 : ${nums.length-i}`);