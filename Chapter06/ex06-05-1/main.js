const o = {
    name: "Wallace",
    speak() { return `My name is ${this.name}`;},
}

const o2 = {
    名前: "ポチ",
    話す() { return `僕の名前は${this.名前}`; },
}

console.log(o);
console.log(o2);
console.log(o.speak());
console.log(o2.話す());