const cart = [ { 名前: "iPhone", 価格: 54800}, { 名前: "Android", 価格: 49800} ];

const names = cart.map(x => x.名前);
console.log(names);

const prices = cart.map(x => x.価格)
console.log(prices);

const discountPrices = prices.map(x => x*0.8);
console.log(discountPrices);

const lcNames = names.map(x => x.toLowerCase());
console.log(lcNames);