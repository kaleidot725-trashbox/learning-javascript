const g = function f(stop) {
    if (stop) {
        console.log('f停止');
        return;
    }
    else {
        console.log('fは停止していない');
        f(true);
    }
}

g(false);
console.log("----");
g(true);