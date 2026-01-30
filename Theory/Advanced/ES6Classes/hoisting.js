sayHello(); // Because its hoisted we will not get any error 
// Function Declaration => they are hoisted (raised to the top)
function sayHello() {

}
// Function Expresion => they are not hoisted 
const sayGoodbye = () => {}; // With expresions we would get Reference error

// Class Declaration are NOT hoisted!!
// const c = new Circle(); => we would get error Class is not defined
class Circle {
}

// Class Expression 
const Square = class {
};