// 処理系はループ処理単位で変数iのコピーを作る。そのため意図した動作になる。
for(let i = 5; i >= 0; i--) {
    (function() {
        setTimeout(function() {
            console.log(i===0 ? "go!" : i);
        }, (5 - i) * 1000);
    })();
}