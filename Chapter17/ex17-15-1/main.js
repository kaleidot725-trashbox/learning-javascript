let chap2 = "第2章 初めてのJavaScriptアプリ\n" 
    + "第1章では、JavaScriptの開発環境について説明しました。…\n" 
    + "詳しくは第23章を参照してください。…\n"
    + "第3章では変数や定数について説明します。";

chap2 = chap2.replace(/第(\d+)章/g, '$1章');
console.log(chap2);