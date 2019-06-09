const dates = [];
const min = new Date(2017, 0, 1).valueOf();
const delta = new Date(2020, 0, 1).valueOf() - min;

for(let i = 0; i < 10; i++) 
    dates.push(new Date(min + delta*Math.random()));

printDates(dates);
console.log("----");
dates.sort((a, b) => b - a);
printDates(dates);
console.log("----");
dates.sort((a, b) => a - b);
printDates(dates);

function printDates(dates) {
    for (let i = 0; i < dates.length; i++) {
        const d = dates[i];
        console.log(i + ". " + d.getFullYear()+"年"+(d.getMonth()+1)+"月"+d.getDate()+"日");
    }
}