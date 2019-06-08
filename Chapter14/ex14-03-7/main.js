'use strict';

const fs = require('fs');

function launch() {
    return new Promise((resolve, reject) => {
        if (Math.random() < 0.5) return;
        console.log("発射!");
        setTimeout(function() {
            resolve("周回軌道に乗った!");
        }, 2*2000);        
    });
}

launch().then((result) => {
    console.log(`resolve ${result}`);
}).catch((err) => {
    console.log(`reject ${err}`);
});