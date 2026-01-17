
function maskify(cc) {
    result = "";
  if (cc.length>4) {
    for (let i = 0; i < cc.length-4; i++) {
        result += "#";
  }
    for (let i= cc.length-4; i< cc.length; i++) {
        result += cc[i];
    }
    return result;
  }
  else {
    return cc;
  }
}
console.log(maskify('sigma male'));
