const emailPattern = /\b[a-z0-9_-]+@[a-z_-]+(?:\.[a-z]+)+\b/;
const phonePattern = /(:?\+1)?(:?\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/;

var sampleEmail = "test@test.co.jp";
console.log(sampleEmail.match(emailPattern)[0]);

var samplePhone = "123-456-7890";
console.log(samplePhone.match(phonePattern)[0]);