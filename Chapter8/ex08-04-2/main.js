const items = ["iPhone", "Android"];
const prices = [54800, 49800];
const cart = items.map((x, i) => ({ 名前: x, 価格: prices[i]}));
console.log(cart);