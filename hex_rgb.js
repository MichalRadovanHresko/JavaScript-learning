function hexStringToRGB(hexString) {
    let hex = hexString.replace('#', '');
    let r = hex.substring(0, 2);
    let g = hex.substring(2,4);
    let b = hex.substring(4,6);
   
    r = parseInt(r, 16);
    g = parseInt(g, 16);
    b = parseInt(b, 16);
    return { r: r, g: g, b: b };
}
console.log(hexStringToRGB('#FF9933')); 