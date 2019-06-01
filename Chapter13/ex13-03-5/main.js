const rainbow = getRainbowIterator();
setInterval(function() {
    document.querySelector('.rainbow')
        .style['background-color'] = rainbow.next().value;
}, 500);

const rainbow2 = getRainbowIterator();
setInterval(function() {
    document.querySelector('.rainbow2')
        .style['background-color'] = rainbow2.next().value;
}, 500);

function getRainbowIterator() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let colorIndex = -1;
    return {
        next() {
            if(++colorIndex >= colors.length) colorIndex = 0;
            return { value: colors[colorIndex], done: false };
        }
    };
}