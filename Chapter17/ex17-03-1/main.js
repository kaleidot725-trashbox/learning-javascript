const input = "As I was going to Saint Ives";
const re = /\w{3,}/ig;

console.log("-------");
console.log(input.match(re));
console.log(input.search(re));
console.log(re.test(input));

let a = re.exec(input);
console.log("-------");
console.log(a);
console.log(a[0]);
console.log(a.index);
console.log(a.input);
console.log(a[1]);

console.log("-------");
console.log(re.exec(input));
console.log(re.exec(input));
console.log(re.exec(input));

console.log("-------");
console.log(input.match(/\w{3,}/ig));
console.log(input.match(/\w{3,}/i));
console.log(input.search(/\w{3,}/ig));
