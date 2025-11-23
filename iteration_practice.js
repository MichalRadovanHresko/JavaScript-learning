const numbers = [1, 2, 3, 4, 5, 6];

const mineAgain = number => {
  return number *2;
}

const doubled = numbers.map(mineAgain);

const result = numbers
  .filter(num => num % 2 !== 0)
  .map(num => num * 2);

const words = ["cat", "dog", "hamster"];

const resultT = words.map((word, index, array) => {
  return `${index}: ${word} (total: ${array.length})`;
});

console.log(resultT);