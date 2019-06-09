const tShirts = 
    'Small:    9/n' + 
    'Medium:   5/n' + 
    'Large:    2/n';

const numbers = tShirts.match(/:\s*[0-9]/g);
console.log(numbers);

const phoneNumber1 = "(0269)99-9876";
const phoneNumber2 = "0269ー99ー9875";
console.log(phoneNumber1.replace(/\D/g, ''));
console.log(phoneNumber2.replace(/\D/g, ''));

const field1 = '   X   ';
const field2 = '　 \t   ';
console.log(/\S/.test(field1));
console.log(/\S/.test(field2));