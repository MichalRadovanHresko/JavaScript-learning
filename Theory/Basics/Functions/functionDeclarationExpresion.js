// Function Declaration 
function walk () {
    console.log('walk');
}
// By convention we dont end function with semicolon ;

// Anonymous Function Expresion
const run = function() {
    console.log('run');
};

// Named Function Expresion
const fly = function flow() {
    console.log('flow');
};

let move = run();
move(); 


// The main differences 
/*
We can call this functions before its defined where as in expresion we can't
Why because JavaScript engine will move all the functions to the top that is called 
HOISTING => Process of moving functions declaration to the top of the file
*/