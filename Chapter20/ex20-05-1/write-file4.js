const fs = require('fs');
const path = require('path');
fs.writeFileSync(path.join(__dirname, 'hello4.txt'), 'Nodeからごあいさつです！\n');