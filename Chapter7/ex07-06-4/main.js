const f = (function() {
    let count = 0;
    return function() {
        return `この関数が呼ばれた回数 : ${++count}回。`;
    }
})();

console.log(f());
console.log(f());
console.log(f());