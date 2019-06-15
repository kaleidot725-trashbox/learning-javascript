const fs = require('fs');

fs.writeFile(__dirname + '/hello2.txt', 'Nodeからごあいさつです！\n', function(err) {
    if (err) return console.log('エラー : ファイルに書き込めません。');
});