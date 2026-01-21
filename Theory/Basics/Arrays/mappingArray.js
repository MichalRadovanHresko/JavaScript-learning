const numbers = [1, -2 , 3, 4, 5];

const filtered = numbers.filter( n => n >= 0);

// We can use map method to map element from an array into something else 
const items = filtered.map( n => '<li>' + n + '</li>');
const html = '<ul>' + items.join('') + '</ul>';

// We can map them into the object 
const itemsObject = filtered.map(n => ({ value: n}));

// We dont have to store it in variable, there is better way
// This is called chaining (when we call multiple methods)
// This makes our code cleaner
/* 
const items = numbers
    .filter(n => n>= 0)
    .map(n => ({value: n}))
    .filter( obj => obj.value > 2)
    .map(obj => obj.value); this will change object into array again

console.log(items);
*/

console.log(html); 
console.log(itemsObject);