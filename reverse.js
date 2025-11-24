const sentence = ['sense.','make', 'all', 'will', 'This'];

const reverseArray = array => {
  const reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
};
console.log(sentence);
console.log(reverseArray(sentence)); 

