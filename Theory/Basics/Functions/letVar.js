const start = () => {
    for (var i = 0; i < 5; i++)
        console.log(i);
    console.log(i); 
    // Var is limited to the function in which is defined not the scope block  (var => function scope variable)
};

start();

// We should avoid generally using var variable 