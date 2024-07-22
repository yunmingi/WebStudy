
const path = require('path');

const filePath = '/home/usr/dir/file.txt';
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath));
console.log(path.resolve(filePath));
