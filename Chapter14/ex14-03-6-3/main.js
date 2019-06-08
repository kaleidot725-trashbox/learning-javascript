'use strict';

const fs = require('fs');

function readFile(fileName) {
    return new Promise(
        (onFulfilled, onRejected) => {
            fs.readFile(fileName, "utf-8", (err, data) => {
                console.log(data);
                if (err) {
                    console.log("readfile error:" + fileName + err);
                    onRejected(err);
                }

                onFulfilled(data);
            });        
        });
}

function writeFile(fileName, data) {
    return new Promise(
        (onFulfilled, onRejected) => {
            fs.writeFile(fileName, data, err =>{
                if (err) {
                    console.log("writefile error" + fileName + err);
                    onRejected(err);
                }

                onFulfilled("OK");
            });
        });
}

Promise.all([readFile("a.txt"), readFile("b.txt"), readFile("c.txt")])
.then(function(results) {
    const allData = results[0] + results[1] + results[2];
    return writeFile("d.txt", allData);
})
.then(function(mes) {
    console.log("ファイルの合体に成功しました。")
})
.catch(err => {
    console.error("エラーが起こりました:" + err);
});
