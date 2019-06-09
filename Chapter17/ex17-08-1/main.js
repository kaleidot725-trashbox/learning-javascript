const beer99 = "99 bottles of beer on the wall" + 
    "take 1 down and pass it around" +
    "98 bottles of beer on the wall.";

const m1 = beer99.match(/0|1|2|3|4|5|6|7|8|9/g);
console.log(m1);

const m2 = beer99.match(/[0-9]/g);
console.log(m2);

const m3 = beer99.match(/[0-9a-z\-.]/ig);
console.log(m3);

const m4 = beer99.match(/[-0-9a-z.]/ig);
const m5 = beer99.match(/[0-9a-z.-]/ig);

const m3String = JSON.stringify(m3);
const m4String = JSON.stringify(m4);
const m5String = JSON.stringify(m5);
console.log(m3String);
console.log(m3String === m4String);
console.log(m3String === m5String);
