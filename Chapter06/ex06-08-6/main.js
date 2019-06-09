'use strict';

const bruce = { 名前: "ブルース" };
const madeline = { 名前: "マデライン" };

function update(birthYear, occupation) {
    this.生年 = birthYear;
    this.職業 = occupation;
}

const updateBruce = update.bind(bruce);
console.log(bruce);
updateBruce(1984, "俳優");
console.log(bruce);

console.log(madeline);
updateBruce.call(madeline, 1274, "王様");
console.log(madeline);
console.log(bruce);