const input = "One line\nTwo line\nThree line\nFour";
const beginnings = input.match(/^\w+/mg);
console.log(beginnings);

const endings = input.match(/\w+$/mg);
console.log(endings);

const input2 = "あの頃が最高だったな〜。\nあの頃は￥最悪でもあったな〜。\n"
                + "あいつは元気かな〜";

const beginning2 = input2.match(/^.*?[はが]/mg);
console.log(beginning2);
