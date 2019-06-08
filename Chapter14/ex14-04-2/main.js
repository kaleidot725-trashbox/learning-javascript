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
    const data = yield Promise.all([readFile('a.txt'), readFile('b.txt'), readFile('c.txt')]); 
    yield writeFile('d.txt', data[0]+data[1]+data[2]);
}

grun(fileReadAndWrite);
