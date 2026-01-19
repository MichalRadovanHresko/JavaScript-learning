let adress1  = new Adress('Klostertorvet','Aarhus','8000');
let adress2  = new Adress('Tinesvej','Aarhus','8100');
let adress3 = adress1; // Because they are pointing to the same object in the memory;

function Adress (street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
};

const areEqual = (adress1, adress2) => { 
    for(let key in adress1) {
        if (adress1[key] === adress2[key]) continue;
        else return console.log('The Objects are NOT equal!');
    }
    console.log('The Objects are equal!');
};

const areSame = (adress1, adress2) => {
    return console.log(adress1===adress2);
};

areEqual(adress1, adress2);
areSame(adress1,adress3); 