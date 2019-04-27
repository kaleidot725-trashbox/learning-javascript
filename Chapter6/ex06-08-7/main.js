const bruce = { 名前: "ブルース" };

function update(birthYear, occupation) {
    this.生年 = birthYear;
    this.職業 = occupation;
}

const updateBruce1949 = update.bind(bruce, 1949);

console.log(bruce);
updateBruce1949("作詞家");
console.log(bruce);