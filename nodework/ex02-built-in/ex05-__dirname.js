
//__dirname
//현재 모듈의 디렉터리 경로

console.log(__dirname);

const path = require('path');
const path1 = path.join(__dirname,'file.txt');
console.log(path1);
const path2 = path.join(__dirname,'data','file.txt');
console.log(path2);
