module.exports = {
  geometricSum(a, x, n) {
      if (x === 1) return a * n;
      return (a * (1 - Math.pow(x, n))) / (1 - x);
  },
  sphereVolume(r) {
      return 4 / 3 * Math.PI*Math.pow(r, 3);
  },
  quadraticFormula(a, b, c) {
      const D = Math.sqrt(b*b - 4*a*c);
      return [(-b + D)/(2*a), (-b - D)/(2*b)]
  },
}