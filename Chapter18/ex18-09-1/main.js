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

const hightlightActions = document.querySelectorAll('[data-action="highlight"]');
for (let a of hightlightActions) {
    a.addEventListener('click', evt => {
        evt.preventDefault();
        highlightParas(a.dataset.containing);
    });
}

const removeHightlightActions = document.querySelectorAll('[data-action="removeHightlights"]');
for (let a of removeHightlightActions) {
    a.addEventListener('click', evt => {
        evt.preventDefault();
        removeParaHightlights();
    });
}
