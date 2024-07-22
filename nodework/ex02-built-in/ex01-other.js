console.log(global.config.appName);
console.log(global.config.version);

global.logMessage('다른 모듈에서 글로벌 함수 호출');

global.require('./ex01-main.js');
