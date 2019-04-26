const o = {
    name: "Wallace",
    bark() { return "Woof!";},
}

const o2 = {
    名前: "ポチ",
    吠える() { return 'ウーッ、ワン！'; },
}

console.log(o);
console.log(o2);
console.log(o.bark());
console.log(o2.吠える());