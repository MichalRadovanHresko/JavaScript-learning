const makeCategory = (id, category, howManyItems, items) => {
    return {
        id,
        category,
        howManyItems,
        items,
        typeOfItems: 'food'
    };
};

const inexpensive = makeCategory(0, 'inexpensive', 724, [ { restaurant: 'Black Lagoon', location: 'Viby J Aarhus'}, { restaurant: 'Pizza Diana', location: 'Risskov Aarhus'}]);
const moderate = makeCategory(1, 'moderate', 542, [ { restaurant: 'Carlton', location: 'Aarhus C'}, { restaurant: 'Memfisto', location: 'Aarhus H'}]);
const expensive = makeCategory(2, 'expensive', 120, [ { restaurant: 'Lagu\'i Meqi', location: 'Copenhagen C'}, { restaurant: 'Classificani Memorio', location: 'Vejle H'}]);

console.log(inexpensive);
console.log(moderate);
console.log(expensive);