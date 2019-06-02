function findNeedle(haystack) {
    if(haystack.length === 0) return "藁山はなくなった";
    if(haystack.shift() === '針') return "針が見つかった!";
    console.log(haystack);
    return findNeedle(haystack);
}

console.log(findNeedle(['藁', '藁', '藁', '藁', '針', '藁', '藁', '藁']));