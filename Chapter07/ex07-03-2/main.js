let user = {
    name : "桃太郎",
    age : 25
};

function greet() {
    console.log(`こんにちは、${user.name}さん!`);
}

function getBirthYear() {
    return new Date().getFullYear() - user.age;
}

greet();
console.log(getBirthYear());