// We use getters to access properties in the objects 
// We use setters to change or mutate the objects


const person = {
    firstName: 'Michal',
    lastName: 'Hresko',
    get fullName () {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName (value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person.fullName = 'Passionate Programmer';
console.log(person); // We can access fullName like a property now 