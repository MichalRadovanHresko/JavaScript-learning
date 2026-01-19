// Constructor function
function ConstAdress (street, city, zipCode) {
    this.street = 'Herningvej 254';
    this.city = 'Aarhus';
    this.zipCode = 8000;
};

// Factory function
const makeAdress = (street,city,zipCode) => {
    return {
        street: 'Herningvej 254',
        city: 'Aarhus',
        zipCode: 8000
    };
};


const adress1 = makeAdress();
const adress2 = new ConstAdress();
console.log(adress1);
console.log(adress2);