let name = "桃太郎";
let age = 25;

function greet() {
    console.log(`こんにちは、${name}さん!`);
}

function getBirthYear() {
    return new Date().getFullYear() - age;
}

greet();
console.log(getBirthYear());