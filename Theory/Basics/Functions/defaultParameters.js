// Old way of setting default value
function interest (principal, rate, years) {
    rate = rate || 3.5;
    years = years || 5;

    return principal * rate / 100 * years;
}
// More Elegant way 
const newInter = (principal, rate = 3.5, years = 5) => {
    return principal * rate / 100 * years;
};
// Its always good to have default value as the last in the list (Not like (principal, rate = 3.5, years)) 
// This can cause problem 
console.log(interest(10000));
console.log(newInter(10000));