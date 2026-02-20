// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.
// For example n = 3 result in:
// "I\n I\n  I";
// Printed:
// I
//  I
//   I

function drawStairs(n) {
  let result = "";
  const emptySpace = " ";

  for (let i = 1; i <= n; i++) {
    i !== n ? (result += "I\n" + emptySpace.repeat(i)) : (result += "I");
  }

  return result;
}

console.log(drawStairs(15));
