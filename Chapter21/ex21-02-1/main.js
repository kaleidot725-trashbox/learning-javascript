'use strict'

const obj = { foo: "bar" };
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));

Object.defineProperty(obj, "foo", {writable: false});
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));

obj.foo = 3;