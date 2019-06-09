const before = { d: new Date() };
console.log(before.d);
console.log(before.d instanceof Date);

const json = JSON.stringify(before);
console.log(json);

const after = JSON.parse(json);
console.log(after.d instanceof Date);
console.log(typeof after.d);
