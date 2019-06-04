console.log("setTimeoutの前: " + new Date());
setTimeout(
    function() {
        console.log("setTimeoutに指定された無名関数の中: " + new Date());
    }, 
    10* 1000
);
console.log("setTimeoutの後");
console.log("これもsetTimeの後");