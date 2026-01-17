let role= 'guest';


switch (role) {
    case 'guest':
        console.log('Guest user');
        break;
    case 'moderator':
        console.log('Moderator user');
        break;
    // We can have as many statements here if not of them match we can default statement 
    default: 
        console.log('Unknown user');
        // We dont need to use break here 
}