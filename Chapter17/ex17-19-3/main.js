const users = ["mary", "nick", "arthur", "sam", "yvette"];
const userRegex = new RegExp(`@(?:${users.join('|')})\\b`, 'g');
console.log(userRegex);

const text =    "User @arthur started the backup and 15:15, " + 
                "and @nick and @yvette restored it at 18:35.";

console.log(text.match(userRegex));

const users2 = ["浦島太郎", "一寸法師", "桃太郎", "金太郎", "かぐや姫"];
const userRegex2 = new RegExp(`(?:${users2.join('|')})`, 'g');

const text2 =   "浦島太郎がバックアップを開始(15:15)" + 
                "かぐや姫と金太郎がリストア(18:35)";
console.log(text2.match(userRegex2));