const roles = new Set();

roles.add("ユーザー");
console.log(roles);

roles.add("管理者");
console.log(roles);
console.log(roles.size);

roles.add("ユーザー");
console.log(roles);

console.log(roles.delete("管理者"));
console.log(roles);
console.log(roles.delete("管理者"));