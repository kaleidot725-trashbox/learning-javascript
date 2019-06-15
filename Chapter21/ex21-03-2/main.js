"use strict";

class Logger {
  constructor(name) {
    this.name = name;
    this.log = [];
  }

  add(entry) {
    this.log.push({
      log: entry,
      timestamp: Date.now()
    });
  }
}

const log = new Logger("船長の航海日誌");
Object.seal(log);
console.log(Object.isSealed(log));

log.name = "船長の退屈な航海日誌";
log.add("またまた退屈な日だ...");

log.newProp = "test";
log.name = "test";
delete log.name;
Object.defineProperty(log, "log", { enumerable: false });
