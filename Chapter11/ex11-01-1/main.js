function validateEmail(email) {
    return email.match(/@/) ?
        email : 
        new Error(`無効なメールアドレスです:${email}`);
}

let email = "jane@doe.com";
let validatedEmail = validateEmail(email);
if (validatedEmail instanceof Error) {
    console.error(validatedEmail.message);
}
else {
    console.log(`正しい形式のアドレスです:${validatedEmail}`);
}

email = "aaaaaaaaaaaaaa";
validatedEmail = validateEmail(email);
if (validatedEmail instanceof Error) {
    console.error(validatedEmail.message);
}
else {
    console.log(`正しい形式のアドレスです:${validatedEmail}`);
}
