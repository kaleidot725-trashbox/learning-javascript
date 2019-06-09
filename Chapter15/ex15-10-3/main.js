const moment = require('moment-timezone');

let m = moment();
console.log(m.format());

m.add(3, 'days');
console.log(m.format());

m.subtract(2, 'years');
console.log(m.format());

m = moment();
m.startOf('year');

console.log(m.format());
m.endOf('month');

console.log(m.format());
