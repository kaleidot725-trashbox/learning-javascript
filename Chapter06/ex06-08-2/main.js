const bruce = { 名前: "ブルース" };
const madeline = { 名前: "マデライン" };

function update(birthYear, occupation) {
    this.生年 = birthYear;
    this.職業 = occupation;
}

console.log(bruce);
update.call(bruce, 1949, '歌手');
console.log(bruce);

console.log(madeline);
update.call(madeline, 1942, '女優');
console.log(madeline);