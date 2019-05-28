function validateEmail(email) {
    return email.match(/@/) ?
        email : 
        new Error(`無効なメールアドレスです:${email}`);
}

let email = null;
try {
    const validatedEmal = validateEmail(email);
    console.log(validatedEmail);
    if (validatedEmail instanceof Error) {
        console.error(validatedEmail.message);
    }
    else {
        console.log(`正しい形式のアドレス:${validatedEmail}`);
    }
} catch(err) {
    console.error(`エラー:${err.message}`);
}