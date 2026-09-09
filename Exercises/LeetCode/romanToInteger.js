// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together.
// 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
// Roman numerals are usually written largest to smallest from left to right.
// However, the numeral for four is not IIII. Instead, the number four is written as IV.
// Because the one is before the five we subtract it making four.
// The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
//     I can be placed before V (5) and X (10) to make 4 and 9.
//     X can be placed before L (50) and C (100) to make 40 and 90.
//     C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

const romanToInt = (s) => {
  let result = 0;
  for (let a = 0; a < s.length; a++) {
    if (s[a] === "I") result += 1;
    else if (s[a] === "V")
      if (s[a - 1] === "I") result += 3;
      else result += 5;
    else if (s[a] === "X")
      if (s[a - 1] === "I") result += 8;
      else result += 10;
    else if (s[a] === "L")
      if (s[a - 1] === "X") result += 30;
      else result += 50;
    else if (s[a] === "C")
      if (s[a - 1] === "X") result += 80;
      else result += 100;
    else if (s[a] === "D")
      if (s[a - 1] === "C") result += 300;
      else result += 500;
    else if (s[a] === "M")
      if (s[a - 1] === "C") result += 800;
      else result += 1000;
    else return new Error("Invalid value");
  }
  return result;
};
console.log(romanToInt("IX"));
