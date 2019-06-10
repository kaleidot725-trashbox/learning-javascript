const html = 
    `<img alt='A "Simple" example.'>` +
    `<img alt="Don't abuse it!">`;

const imageTags = html.match(/<img alt=(['"]).*?\1>/g);
for (let i=0; imageTags && i<imageTags.length; i++) {
    console.log(imageTags[i]);
}

console.log('----');

const html2 = `<img alt='A "Simple" example.">`;
const imageTags2 = html2.match(/<img alt=(['"]).*?\1>/g);
for (let i=0; imageTags2 && i<imageTags2.length; i++) {
    console.log(imageTags2[i]);
}

console.log('----');

const html3 = `<img alt="Don't abuse it!'>`;
const imageTags3 = html3.match(/<img alt=(['"]).*?\1>/g);
for (let i=0; imageTags3 && i<imageTags3.length; i++) {
    console.log(imageTags3[i]);
}
