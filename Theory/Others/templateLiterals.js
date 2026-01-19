// Object literals {}
// Boolean literals true, false
// String literals '',""
// Template literals ``

const message = `This is a string where we use:
-template literals! `;
// We can also use placeholder which is very effective 
const name = 'Michal';
const email = `Dear ${name} ${2+5}

Thank you for joining my mailing list.

Best Regards,
John`;

console.log(message);
console.log(email);