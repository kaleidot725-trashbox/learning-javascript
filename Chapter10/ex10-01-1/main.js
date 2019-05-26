const u1 = { name: "和洋" };
const u2 = { name: "花子" };
const u3 = { name: "京子" };
const u4 = { name: "哲人" };

console.log('-- init1 --');
let userRoles = new Map();
userRoles
  .set(u1, "ユーザー")
  .set(u2, "ユーザー")
  .set(u3, "管理者");
console.log(userRoles);

console.log('-- init2 --');
userRoles = new Map([[u1, "ユーザー"], [u2, "ユーザー"], [u3, "管理者"]]);
console.log(userRoles);

console.log('-- has get --');
console.log(userRoles.has(u1));
console.log(userRoles.get(u1));
console.log(userRoles.has(u4));
console.log(userRoles.get(u4));

console.log('-- replace --');
console.log(userRoles.get(u1));
userRoles.set(u1, "管理者");
console.log(userRoles.get(u1));

console.log('-- size --');
console.log(userRoles.size);

console.log('-- for --');
for (let u of userRoles.keys()) console.log(u.name);
for (let r of userRoles.values()) console.log(r);
for (let [u, r] of userRoles.entries()) console.log(`${u.name}: ${r}`);
for (let [u, r] of userRoles) console.log(`${u.name}: ${r}`);

console.log('-- spread --');
console.log(userRoles.values());
console.log(...userRoles.values());

console.log('-- delete --');
userRoles.delete(u2);
console.log(userRoles.size);
console.log([...userRoles.values()]);

console.log('-- clear --');
userRoles.clear();
console.log(userRoles.size);
console.log([...userRoles.values()]);