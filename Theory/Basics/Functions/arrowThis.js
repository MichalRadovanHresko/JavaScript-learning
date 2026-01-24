// ============================================
// THIS in Arrow Functions vs Regular Functions
// ============================================

// REGULAR FUNCTION: 'this' depends on HOW the function is called
// - Method call -> 'this' = object
// - Function call -> 'this' = global object (window/global)
// - Can be changed with call(), apply(), bind()

function regularFunction() {
    console.log(this); // depends on how it's called
}

const obj = {
    value: 'I am object',
    regular: function() {
        console.log(this.value); // 'I am object' - this = obj
    }
};

obj.regular(); // this = obj
regularFunction(); // this = global object


// ARROW FUNCTION: 'this' is INHERITED from lexical scope (where it's defined)
// - Always inherits 'this' from parent scope
// - Cannot be changed with call(), apply(), bind()
// - No own 'this' binding

const arrowFunction = () => {
    console.log(this); // always the same - inherited from outer scope
};

const obj2 = {
    value: 'I am object',
    arrow: () => {
        console.log(this.value); // undefined - inherits from global scope, not obj2
    }
};

obj2.arrow(); // this !== obj2, it's global


// PRACTICAL EXAMPLE: Why arrow functions are useful
const video = {
    title: 'Learning JavaScript',
    tags: ['js', 'es6', 'arrow'],
    
    // Problem with regular function
    showTagsRegular() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag); // ERROR: this.title is undefined
            // 'this' changed inside forEach callback
        });
    },
    
    // Solution: Arrow function inherits 'this'
    showTagsArrow() {
        this.tags.forEach((tag) => {
            console.log(this.title, tag); // WORKS: 'this' inherited from showTagsArrow
        });
    }
};

video.showTagsArrow(); // Works correctly


// SUMMARY:
// Regular Function: this = who calls it (dynamic binding)
// Arrow Function: this = where it's defined (lexical binding)