const getNextRainbowColor = (function() {
    const colors = ['赤', '橙', '黄', '緑', '青', '水色', '紫'];
    let colorIndex = -1;
    return function(){
        if(++colorIndex >= colors.length) colorIndex = 0;
        return colors[colorIndex];
    };
})();

console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
console.log(getNextRainbowColor());
