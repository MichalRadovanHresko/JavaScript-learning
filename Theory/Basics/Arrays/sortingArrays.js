const numbers = [2, 5, 6, 1, 3, 8];
numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);

const courses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'JavaScript'}
];

courses.sort((a,b)=> { 
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(courses);