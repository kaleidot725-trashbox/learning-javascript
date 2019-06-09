const moment = require('moment-timezone');

console.log(moment().format());
const m = moment()
    .add(10, 'hours')
    .subtract(3, 'days')
    .endOf('month');

console.log(m.format());