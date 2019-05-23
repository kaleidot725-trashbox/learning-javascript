const SYM = Symbol();
const o2 = { a:1, b:2, c:3, SYM:4};
console.log(o2.SYM);
console.log(o2["SYM"]);
console.log(o2[SYM]);