function formatBinary(x) {
    const y = x.toString(2);
    return ("0000" + y).substr(-4);
}

const FLAG_READ = 1;
const FLAG_WRITE = 2;
const FLAG_EXECUTE = 3;
console.log(formatBinary(FLAG_READ));
console.log(formatBinary(FLAG_WRITE));
console.log(formatBinary(FLAG_EXECUTE));
console.log(formatBinary(FLAG_READ | FLAG_WRITE));

let p = FLAG_READ | FLAG_WRITE;
console.log(formatBinary(p));
let hasWrite = p & FLAG_WRITE ? "yes" : "No";
console.log(`書き込みパーミッション:${hasWrite}`);
let hasExecute = p & FLAG_EXECUTE ? "Yes" : "No";
console.log(`実行パーミッション:${hasExecute}`);

console.log(formatBinary(p));
p = p ^ FLAG_WRITE;
console.log(formatBinary(p));
p = p ^ FLAG_WRITE;
console.log(formatBinary(p));
const hasReadAndWrite = p & (FLAG_READ | FLAG_WRITE) ? "可" : "不可";
console.log(`読み書き${hasReadAndWrite}`);