Array.prototype.last = function () {
  if (typeof this === "undefined") throw new Error("Not valid value");
  if (this.length === 0) return -1;
  else
    for (let i = this.length - 1; i >= this.length - 2; i--) {
      return this[i];
    }
};

const arr = [1, 2, 3];
console.log(arr.last());
