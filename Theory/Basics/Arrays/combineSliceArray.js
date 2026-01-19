const first = [1,4,10];
const second = [10,2];

// If we want to combine
const combined = first.concat(second);

// If we want to slice
const copy = combined.slice();
const piece = combined.slice(2);
const slice = combined.slice(2, 4);

console.log(combined);
console.log(copy);
console.log(piece);
console.log(slice);