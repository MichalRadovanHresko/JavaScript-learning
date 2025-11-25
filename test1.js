function squareSum(numbers){
  const square = numbers.map(number => number * number);
  let result = 0;
  for (let i= 0; i < square.length; i++) {
    result = result + square[i];
  };
  return result;
}

console.log(squareSum([1, 2, 2]));
