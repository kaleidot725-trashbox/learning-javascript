function highlightParas(containing) {
    if(typeof containing === 'string') 
        containing = new RegExp(`${containing}`);

    const paras = document.getElementsByTagName('p');
    for(let p of paras) {
        if(!containing.test(p.textContent)) continue;
        p.classList.add('highlight');
    }
}

function removeParaHightlights() {
    const paras = document.getElementsByTagName('p');
    for(let p of paras) {
        p.classList.remove('highlight');
    }
}

const hightlightActions 
    =   document.querySelectorAll('[data-action="highlight"]');

console.log(hightlightActions[0].dataset);
