class Log {
    constructor() {
        this.messages = [];
    }
    add(message) {
        const now = Date.now();
        console.log(`ログ追加: ${message}(${now})`);
        this.messages.push({ message, timestamp: now });
    }

    [Symbol.iterator]() {
        return this.messages.values();
    }
}

const log = new Log();

log.add("海の監視初日。勤務開始");
setTimeout(function() {log.add("クジラを見た");}, 3*1000);
setTimeout(function() {log.add("1艘の船を見た");}, 7*1000);
setTimeout(function() {log.add("監視終了");}, 9 *1000);

setTimeout(function() {
    console.log(`- 本日の業務報告 - (${new Date()})`);
    for (let entry of log) {
        const date = new Date(entry.timestamp);
        console.log(`${entry.message} (${date})`);
    }
}, 10*1000);