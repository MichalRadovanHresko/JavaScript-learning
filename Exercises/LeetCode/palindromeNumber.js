const isPalindrome = (x) => {
  return x.toString().split("").map(Number).reverse().join("") == x
    ? true
    : false;
};

console.log(isPalindrome("121"));
