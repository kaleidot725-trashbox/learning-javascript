const coefficients = {
  a: 1,
  c: 3,
};

const betterCoefficients = new Proxy(coefficients, {
  get(target, key) {
    if(!/^[a-z]$/.test(key)) return target[key];
    return target[key] || 0;
  },
})

function evaluate(x, c) {
  return c.a + c.b * x + c.c * Math.pow(x, 2);
}

console.log(betterCoefficients.a);
console.log(betterCoefficients.b);
console.log(betterCoefficients.c);
console.log(betterCoefficients.d);
console.log(betterCoefficients.z);
console.log(betterCoefficients.anything);
console.log(evaluate(5, betterCoefficients));
