let user = {
    name: "桃太郎",
    age: 25
};

function greet(person) {
    console.log(`こんにちは、${person.name}さん!`);
}

function getBirthYear(person) {
    return new Date().getFullYear() - person.age;
}

greet(user);
console.log(getBirthYear(user));