let x = 0;
while(true) {
    x += 0.1;
    console.log(x);
    if (Math.abs(x - 0.3) < Number.EPSILON) break;
}
console.log(`${x}で停止`);