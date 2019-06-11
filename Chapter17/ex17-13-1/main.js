const input = "Regex pros know the difference between\n" +
    "<i>greedy</i> and <i>lazy</i> matching.";


// <i>にマッチした後、一番うしろの</i>にマッチさせる。（greedyなマッチング）
const output = input.replace(/<i>(.*)<\/i>/ig, '<strong>$1</strong>');
console.log(output);

// *?にすると最短マッチ(lazyなマッチング)
const output2 = input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>');
console.log(output2);

