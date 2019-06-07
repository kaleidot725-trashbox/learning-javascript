function countdown(seconds) {
    return new Promise(function(onFulfilled, onRejected) {
        const timeoutIds = [];
        for(let i = seconds; i >= 0; i--) {
            timeoutIds.push(setTimeout(function() {
                if(i===13) {
                    timeoutIds.forEach(clearTimeout);
                    return onRejected(new Error(`${i}という数は不吉過ぎます`));
                }

                if(i > 0) console.log(i + '...');
                else onFulfilled(console.log("GO!"));
            }, (seconds-i) * 1000))
        }
    });
}

function launch() {
    return new Promise(function(onFulfilled, onRjected) {
        console.log("発射！");
        setTimeout(function() {
            onFulfilled("集会起動に乗った！");
        }, 2*1000);
    });
}

countdown(15)
    .then(launch)
    .then(function(msg){
        console.log(msg);
    })
    .catch(function(err){
        console.error("管制塔、管制塔。 トラブル発生…" + err);
    })