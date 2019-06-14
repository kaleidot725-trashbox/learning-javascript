function highlightParas(containing) {
    if(typeof containing === 'string') 
        containing = new RegExp(`${containing}`);

    const paras = document.getElementsByTagName('p');
    for(let p of paras) {
        if(!containing.test(p.textContent)) continue;
        p.classList.add('highlight');
    }
}

highlightParas('ユニーク');