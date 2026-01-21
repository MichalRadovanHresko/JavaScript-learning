const Adress = {
    street: 'Herningvej 254',
    city: 'Aarhus',
    zipCode: 8100
};

const showAdress = adress => {
    for( let key in adress) 
        console.log(key, adress[key]);
};

showAdress(Adress);
