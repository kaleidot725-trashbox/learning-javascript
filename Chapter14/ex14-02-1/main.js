console.log("setTimeoutの前: " + new Date());
function f() {
    console.log("これは関数fの中: " + new Date());
}
setTimeout(f, 10 * 1000);
console.log("setTimeoutの後");
console.log("これもsetTimeの後");