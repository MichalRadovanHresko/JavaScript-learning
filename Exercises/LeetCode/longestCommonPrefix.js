const longestCommonPrefix = (strs) => {
  let longestPrefix = "";
  outerLoop: for (let i = 0; i < strs[0].length; i++) {
    let current = strs[0][i];
    for (let word of strs) {
      if (word[i] !== current) break outerLoop;
    }
    longestPrefix += current;
  }
  return strs[0][0] === undefined ? "" : longestPrefix;
};

// bad implementation finish after work!
console.log(longestCommonPrefix(["flower", "flower", "flower", "flower"]));
