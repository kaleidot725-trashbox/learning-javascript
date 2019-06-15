const cook = {
  name: "Walt",
  redPhosphorus: 100,
  water: 500,
};

const protectedCook = new Proxy(cook, {
  set(target, key, value) {
    if(key === 'redPhosphorus') {
      if(target.allowDangerousOperations)
        return target.redPhosphorus = value;
      else 
        return console.log("危険すぎます!");
    }
    target[key] = value;
  },
});

protectedCook.water = 550;
console.log(protectedCook.water);
console.log(protectedCook.redPhosphorus);

protectedCook.redPhosphorus = 150;
console.log(protectedCook.redPhosphorus);

protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150;
console.log(protectedCook.redPhosphorus);
