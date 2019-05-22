const SYM = Symbol();
const o3 = { a: 1, b: 2, c: 3 };
o3[SYM] = 4;
console.log(o3.SYM);
console.log(o3["SYM"]);
console.log(o3[SYM]);
