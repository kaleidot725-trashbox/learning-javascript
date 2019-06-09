const arr1 = [1, 2, 3];
const arr2 = ["one", 2, "three"];
const arr3 = [[1, 2, 3], ["one", 2, "three"]];
const arr4 = [  { name: "サル", type: "object", luckyNumbers: [5, 7, 13]},
                [
                       { name: "キジ", type: "object"},
                    { name: "キジ", type: "object"},
                ],
             1,
             function() { return "配列の要素として関数を記憶することもできる"; },
             "three",
];

// 要素へのアクセス
console.log(arr1[0]);
console.log(arr2[2]);
console.log(arr3[1]);
console.log(arr4[1][0]);

// 配列の長さ
console.log(arr1.length);
console.log(arr4.length);
console.log(arr4[1].length);

// 配列の長さを大きくする
arr1[4] = 5;
console.log(arr1);
console.log(arr1[3]);
console.log(arr1.length);

// 配列の最後の要素より後ろの添字を使う(代入ではない) -> 大きさは変わらない
console.log(arr2[10]);
console.log(arr2.length);

// Arrayコンストラクタ(通常は使われない)
const arr5 = new Array();
console.log(arr5);
const arr6 = new Array(1, 2, 3);
console.log(arr6);
const arr7 = new Array(2);
console.log(arr7);
console.log(arr7[1]);
const arr8 = new Array("2");
console.log(arr8);