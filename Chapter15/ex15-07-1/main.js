const d = new Date(Date.UTC(1930, 4, 10, 10, 0));
console.log(d.toLocaleDateString());
console.log(d.toLocaleTimeString());
console.log(d.toTimeString());
console.log(d.toUTCString());

const moment = require('moment-timezone');
console.log(moment(d).format("YYYY-MM-DD"));
console.log(moment(d).format("YYYY-MM-DD HH:mm"));
console.log(moment(d).format("YYYY-MM-DD HH:mm Z"));
console.log(moment(d).format("YYYY-MM-DD HH:mm [UTC]Z"));
console.log(moment(d).format("dddd, MMMMM [the] Do, YYYY"));
console.log(moment(d).format("h:mm a"));
console.log(moment(d).format("YYYY年M月D日 hh:mmA"));