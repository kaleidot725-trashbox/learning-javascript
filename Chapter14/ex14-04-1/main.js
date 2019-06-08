const fs = require('fs');

// プロミスが取得できなくなるまで再帰的に呼び出す
function grun(g) {
    const it = g();

    (function iterate(val) {
        const x = it.next(val);
        if(!x.done) {
            console.log(x);
            if (x.value instanceof Promise) {
                x.value.then(iterate).catch(err => it.throw(err));
            } else {
                setTimeout(iterate, 0, x.value);
            }
        }
    })();
}

function readFile(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf-8", (err, data) => err ? reject(err) : resolve(data));
    });
}

function writeFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => err ? reject(err) : resolve("OK"));
    });
}

function* fileReadAndWrite() {
    const dataA = yield readFile('a.txt');
    const dataB = yield readFile('b.txt');
    const dataC = yield readFile('c.txt');
    yield writeFile('d.txt', dataA+dataB+dataC);
}

grun(fileReadAndWrite);
