// ループ処理の単位で変数iを宣言しなくなるので、意図した動作にならない。
let i;
for(i = 5; i >= 0; i--) {
    (function() {
        setTimeout(function() {
            console.log(i===0 ? "go!" : i);
        }, (5 - i) * 1000);
    })();
}