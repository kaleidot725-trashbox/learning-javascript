let f;
{
    let o = { note: '安全', note2: '大丈夫'} ;
    f = function() {
        console.log("無名関数の中: " + o.note);
        return o;
    }
}

let oRef = f();
console.log(oRef);

// oにアクセスすることができてしまう
oRef.note = "まったく安全ではない!";
console.log(oRef);