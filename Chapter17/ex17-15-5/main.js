const input = "One two three";
let r = input.replace(/two/, '($`)');
console.log(r);

r = input.replace(/\w+/g, '($&)');
console.log(r);

r = input.replace(/two/, "($')");
console.log(r);

r = input.replace(/two/, "($$)");
console.log(r);
