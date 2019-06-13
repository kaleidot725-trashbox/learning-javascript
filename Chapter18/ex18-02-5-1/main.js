const para1 = document.getElementsByTagName('p')[0];
console.log(para1.textContent);
console.log(para1.innerHTML);
alert("変更します");

para1.textContent = "HTMLを修正しました。";
console.log(para1.textContent);
alert("変更します");

para1.innerHTML = "innerHTMLを使った<b>修正後</b>のHTML";
console.log(para1.innerHTML);