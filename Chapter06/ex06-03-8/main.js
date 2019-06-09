function getSenetece([ subject, verb, object] ) {
    return `${subject} ${verb} ${object} `;
}

const arr = [ "I", "love", "JavaScript"];
console.log(getSenetece(arr));