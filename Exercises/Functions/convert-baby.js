const convertToBaby = animal => {
    const baby = [];
    for ( let i = 0; i < animal.length; i++) {
        baby.push(`baby ${animal[i]}`);
    }
    return baby;
};
const zvierata = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(zvierata));