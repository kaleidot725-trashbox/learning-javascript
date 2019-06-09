const beer99 = "99 bottles of beer on the wall" + 
    "take 1 down and pass it around" +
    "98 bottles of beer on the wall.";

const match = beer99.match(/[^ 0-9a-z]/ig);
console.log(match);

const beer99j = "99本の便が、壁に並んでいます。" +
    "1本取って渡しました。" + 
    "98本のビンが、壁に並んでいます。";

const match2 = beer99j.match(/[^0-9ァ-ヴぁ-ん。、]+/g);
console.log(match2);
