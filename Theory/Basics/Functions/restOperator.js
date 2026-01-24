function sum(...arg) { // This is not same as spread operator it looks exactly the same but its something diff
    return arg.reduce((a,b)=> a+b);
}

console.log(sum(2, 5, 7, 7, 90));

// Remember the rest parameter must be the last parameter 
// function divide (num, ...input, someValue) => this is wrong 