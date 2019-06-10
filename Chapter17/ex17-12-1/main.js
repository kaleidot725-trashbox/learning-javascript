const text = "Visit oreilly.com test.org hanpanai.edu today!";
const match = text.match(/[a-z0-9]+(?:\.com|\.org|\.edu)/ig);
console.log(match);

const text2 = "hogehogehogehogehogehoge";
const match2 = text2.match(/(?:hoge)/ig);
console.log(match2)

const html = '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n' +
    '<link rel="stylesheet" href="https://secure.com/securestuff.css">\n' +
    '<link rel="stylesheet" href="//anything.com/flexible.css">'; 

const matches = html.match(/(?:https?:)?\/\/[a-z0-9][a-z0-9.-]+[a-z0-9]+/ig);
console.log(matches);