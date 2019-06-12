function validPassword(p) {
    return /[A-Z]/.test(p) &&
        /[0-9]/.test(p) && 
        /[a-z]/.test(p) &&
        !/[^a-zA-Z0-9]/.test(p);
}

console.log(validPassword("aiueo"));
console.log(validPassword("3aiuEo"));
console.log(validPassword("traverLer2"));
console.log(validPassword("日本語3aB"));
console.log(validPassword("Pocke3"));
console.log(validPassword("Pocke-3"));
