const movie = {
    name: 'Star Wars: Episode IV - A New Hope',
    releaseYear: 1977,
    rating: 8.6,
    director: 'George Lucas'
};


const showProperties = obj => { 
    for (let key in obj) 
        if (typeof obj[key] === 'string') console.log(key, obj[key]);
};

showProperties(movie);