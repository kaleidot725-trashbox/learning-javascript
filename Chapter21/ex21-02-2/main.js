const obj = { foo: "bar" };
Object.defineProperty(obj, 'color', {
    get: function() { return this.color; },
    set: function(value) { this.color = value; },
});

Object.defineProperty(obj, 'name', {
    value: 'シンシア'
});

Object.defineProperty(obj, 'greet', {
    value: function() { return `こんにちは。私の名前は${this.name}です。`; }
});

console.log(obj);
console.log(obj.name);
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));

console.log(obj.greet());
console.log(Object.getOwnPropertyDescriptor(obj, 'greet'));
