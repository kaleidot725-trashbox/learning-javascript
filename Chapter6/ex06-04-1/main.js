const o = {
    name: "Wallace",
    bark: function() { return "Woof!";},
}

const o2 = {
    名前: "ポチ",
    吠える: function() { return 'ウーッ、ワン！'; },
}

console.log(o);
console.log(o2);
console.log(o.bark());
console.log(o2.吠える());