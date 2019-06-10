let html = '<a class="abc" href="/www.xxx.yyy" id="lmn">xxxのサイト</a>';
html = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');
console.log(html);