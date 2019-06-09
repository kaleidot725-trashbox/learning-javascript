const arr = [ { id: 5, name: "太郎" }, { id: 7, name: "花子"} ];
console.log(arr.findIndex(o => o.id === 5));
console.log(arr.findIndex(o => o.name === "花子"));
console.log(arr.findIndex(o => o === 3));
console.log(arr.findIndex(o => o.id === 17));
console.log(arr.findIndex(o => o.id === 7));