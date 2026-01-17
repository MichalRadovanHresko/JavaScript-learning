// Odd numbers
for (let i = 0; i < 10; i++){
    if ( i % 2 !== 0) console.log(i);
};

console.log('\n');

/* do - while loop
   -- they are always executed at least once even if the conditions is false 
*/

let j = 0;

do {
    if (j % 2 !== 0) console.log(j);
    j++;
} while (j<=5);

// Always be aware of infinite loops 
console.log('\n');

// Use of for-in loop
const person = {
    name: 'Mosh',
    age: 30
};

for (let key in person) {
    console.log(person[key]);
};

let colors = ['red', 'green', 'blue'];
console.log('\n');

// for (let index of colors) {
//     console.log(index);
// };

// Starting from ECMASCRIPT 6 we have for-of 

for (let color of colors)
    console.log(color);

// Sometimes you want to run out of loop 
// Thats when we use break 

let i = 0;
while ( i <= 10) {
    // if (i ===5) break;
    if (i % 2 === 0) {
        i++;
        continue; // We jump into the next iteration and we skip the rest of the code
    }
    console.log(i);
    i++;
}