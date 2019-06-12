const input = "It was the best of times, it was the worst of times";
const beginning = input.match(/^\w+/);
console.log(beginning[0]);

const end = input.match(/\w+$/);
console.log(end[0]);

const everything = input.match(/^.*$/);
console.log(everything[0]);

const nomatch1 = input.match(/^best$/i);
console.log(nomatch1);

const matchInput1 = "best";
const match1 = matchInput1.match(/^best$/i);
console.log(match1[0]);

const nomatch2 = input.match(/worst$/i);
console.log(nomatch2);

const matchInput2 = "       worst";
const match2 = matchInput2.match(/worst$/i);
console.log(match2[0]);

const input2 = "あの頃が最高だったな〜。まぁ、あの頃は最悪でもあったな〜。";
const begginning2 = input2.match(/^.*?[はが]/);
console.log(begginning2[0]);

const end2 = input2.match(/[^。]+。$/);
console.log(end2[0]);