const planVacation = (destinationOne, destinationTwo, ...moreDestinations) => {
  return [destinationOne, destinationTwo, ...moreDestinations];
};

console.log(planVacation('Paris','London','Krakow','Trebisov'));