const input = "As I was going to Saint Ives";

const output = input.replace(/\w{4,}/ig, '****');
console.log(output);

const input2 = "セント・アイヴスはイギリスに存在する町の名前です。"
const output2 = input2.replace(/[はをにで]/g, '   ');
console.log(output2);
