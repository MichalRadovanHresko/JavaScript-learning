// You are given the root of a binary tree where each node has a value 0 or 1.
// Each root-to-leaf path represents a binary number starting with the most significant bit.
// For example, if the path is 0 -> 1 -> 1 -> 0 -> 1,
// then this could represent 01101 in binary, which is 13.
// For all leaves in the tree, consider the numbers represented by the path from the root to that leaf.
// Return the sum of these numbers.
// The test cases are generated so that the answer fits in a 32-bits integer.
// Input: root = [1,0,1,0,1,0,1]
// Output: 22
// Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22

const sumRootToLeaf = (root = []) => {
  let joined = root.join("");
  let binaryPaths = [];
  let numberStr = "";

  for (let i = 0; i < 1; i++) {
    for (let j = 1; j < joined.length; j += 3) {
      for (let k = j + 1; k < j + 3; k++) {
        numberStr = "";
        numberStr = joined[i] + joined[j];
        numberStr = numberStr + joined[k];
        binaryPaths.push(Number(numberStr));
      }
    }
  }

  return binaryPaths.reduce((acc, bin) => acc + parseInt(bin, 2), 0);
};

console.log(sumRootToLeaf([1, 0, 1, 0, 1, 0, 1]));
console.log(sumRootToLeaf());

// Its not working NEED TO START FROM THE BOTTOM
