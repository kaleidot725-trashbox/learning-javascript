const fs = require('fs');
function readSketchyFile() {
    // try catchブロックは同じ関数内でしか機能しない、なので例外をキャッチできずエラーになる。
    try {
        fs.readFile('does_not_exist.txt', function(err, data) {
            if (err) throw err;
            else console.log('無事読み込めました');
        });
    } catch(err) {
        console.log('警告:マイナーな問題が発生。実行を継続します。');
    }
}

readSketchyFile();