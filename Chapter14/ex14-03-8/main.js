'use strict';

const fs = require('fs');

function countdown(seconds) {
    return new Promise(
        function(onFulfilled, onRejcted) {
            for (let i=seconds; i>=0; i--) {
                setTimeout(function() {
                    if(i>0) console.log(i + '...');
                    else onFulfilled(console.log("GO!"));
                }, (seconds-i)*1000);
            }
        }
    );
}

function addTimeout(fn, period) {
    if (period === undefined) period = 1000;
    return function(...args) {
        return new Promise((resolve, reject) => {
            const timeoutId = setTimeout(reject, period, new Error("プロミスタイムアウト"));
            fn(...args)
            .then(function(...args) {
                clearTimeout(timeoutId);
                resolve(...args);
            })
            .catch(function(...args) {
                clearTimeout(timeoutId);
                reject(...args);
            });
        });
    }
}

function launch() {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.5) return;
        console.log("発射!");
        setTimeout(function() {
            resolve("周回軌道に乗った!");
        }, 2*2000);        
    });
}

countdown(3)
.then(addTimeout(launch, 4 * 1000))
.then((result) => {
    console.log(result);    
}).catch((err) => {
    console.error("管制塔、管制塔。 トラブル発生… " + err.message);
});