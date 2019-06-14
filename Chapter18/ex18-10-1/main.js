function refreshServerInfo(){
    const req = new XMLHttpRequest();
    req.addEventListener('load', function(){
        console.log(this.responseText);
    });

    req.open('GET', 'http://localhost:50000', true);
    req.send();
}

refreshServerInfo();