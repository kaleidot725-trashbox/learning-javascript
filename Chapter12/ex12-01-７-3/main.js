const book = [
    "あるところに初老の夫婦がすんでたとさ。",
    "夫は山へ妻は川へ行ったとさ。",
    "妻が川で選択をしていると、",
    "上流から桃が流れてきたとさ。",
    "ドンブラコッコ, スッコッコ,",
    "ドンブラコッコ, スッコッコ。",
];

const it = book[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
