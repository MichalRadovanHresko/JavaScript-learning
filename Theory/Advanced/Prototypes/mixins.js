function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

const canEat = {
    eat: function() {
        this.hunger--;
        console.log('eating');
    }
}

const canWalk = { 
    walk: function() {
        console.log('wallking');
    }
}

// const person = Object.assign({}, canEat, canWalk);
// console.log(person);

// Works the same with Constructor functions 
function Person() {
}

mixin(Person.prototype, canEat, canWalk);
const person = new Person();