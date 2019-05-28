try {
    console.log("1行目実行中...");
    throw new Error("エラー1");
    console.log("throwが実行されると、この行は実行されない");
} catch (err) {
    console.log("エラーが起こった...");
} finally {
    console.log("finallyの中のこの行はいつも実行される");
    console.log("リソースの解放をここで行う");
}
