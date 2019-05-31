function* interrogate(){
    const name = yield "お名前は？";
    const color = yield "お好きな色は何ですか？";
    return `${name}さんの好きな色は${color}だそうですよ。`;
}

const it = interrogate();
console.log(it.next());
console.log(it.next('楓'));
console.log(it.next('緑'));
console.log(it.next());