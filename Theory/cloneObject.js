const circle = {
    radius: 1,
    draw () {
        console.log('draw');
    }
};

// Old method of cloning Object 
// for (let key in circle) 
//     another[key] = circle[key];


// This is newer, better version of cloning
const another = Object.assign({}, circle); 


// We can even add properties
const amazing = Object.assign({
    color: 'blue'
}, circle);


// But there is a simpler more elegant way to clone Object
const bombastic = {...circle};