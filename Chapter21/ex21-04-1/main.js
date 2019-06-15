const coefficients = {
  a: 1,
  b: 2,
  c: 5,
};

function evaluate(x, c) {
  return c.a + c.b * x + c.c * Math.pow(x, 2);
}

console.log(evaluate(3, coefficients));
