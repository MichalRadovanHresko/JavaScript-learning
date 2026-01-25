// Prototype => Parent of Object
// Prototype is just a regular object in memory
// Every Object has a prototype/parent except the root Object

let x = {};
let y = {};

console.log(Object.getPrototypeOf(x) === Object.getPrototypeOf(y));

// Prototypical inheritance
// When accessing a property or a method of an object javascript engine walks up the prototype chain to find the target member

// Multilevel inheritance 
// Array -> arrayBase -> ObjectBase

