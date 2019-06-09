const input = "As I was going to Saint Ives";
console.log(input.startsWith("As"));
console.log(input.endsWith("Ives"));
console.log(input.startsWith("going", 9));
console.log(input.endsWith("going", 14));

console.log(input.includes("going"));
console.log(input.includes("going", 10));

console.log(input.indexOf("going"));
console.log(input.indexOf("going", 10));
console.log(input.indexOf("nope"));

console.log("----");
const input2 = "セント・アイヴスはイギリスにある街の名前です。";

console.log(input2.startsWith("セント"));
console.log(input2.endsWith("です。"));
console.log(input2.startsWith("イギリス", 9));

console.log(input2.includes("アメリカ"));
console.log(input2.includes("街", 10));
console.log(input2.indexOf("街"));
console.log(input2.indexOf("街", 10));
console.log(input2.indexOf("アメリカ"));

console.log("----");
console.log(input.toLocaleLowerCase().startsWith("as"));

console.log("----");
const output = input.replace("going", "walking");
console.log(output);

let output2 = input2.replace("イギリス", "英国");
output2 = output2.replace("名前", "名称");
console.log(output2);