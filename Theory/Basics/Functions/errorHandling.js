const nationality = {
    city: 'New York',
    country: 'USA',
    set show (value) {
        if (typeof value !== 'string')
            throw new Error('This value is not a string');
        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter the city and the country');
        this.city = parts[0];
        this.country = parts[1];
    }
};

try {
    nationality.show = '';
}
catch (e) {
    console.log(e);
}

console.log(nationality);