let person = { name: 'Michal'};

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: false,
    configurable: false
});

person.name = 'John'; // Writable is false => read only you cant rewrite it 
delete person.name; // Nothing will happen because of configurable 
console.log(person);
console.log(Object.keys(person)); // enumarble false => you cant enamurate throught it 