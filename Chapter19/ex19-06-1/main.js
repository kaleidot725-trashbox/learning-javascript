const para2 = $('p').get(1);
console.log(`２番目の段落=${para2.innerHTML}`);

const paras = $('p').get();
for(let i=0; i<paras.length; i++) {
    console.log(`${i + 1}番目の段落=${paras[i].innerHTML}`);
}