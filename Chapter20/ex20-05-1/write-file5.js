const fs = require('fs');
const path = require('path');

try {
    fs.writeFileSync(path.join(__dirname, 'hello5.txt'), 'Nodeからごあいさつです！\n');
}catch(err){
    console.error('エラー:ファイルに書き込めません。');
}
