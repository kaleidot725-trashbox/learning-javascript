$('p').text('すべての段落が、この文字列に置換されました');
alert('次へ');

$('p').html('<span style="color: red">すべての</span>段落が置換されました。');
alert('次へ');

$('p').eq(2).html('<b>3番目</b>の段落が置換されました');
alert('次へ');

$('p').remove();