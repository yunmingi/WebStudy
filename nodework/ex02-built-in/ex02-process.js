//process 객체:현재 실행중인 Node.js 프로세스에 대한 정보를 제공하고 제어할 수 있는 전역 객체 환경변수,
//표준 입출력 스트림,종료 이벤트 등 다양한 기능 사용 가능 

console.log(process.version);
console.log(process.arch);
console.log(process.platform);
console.log(process.pid);
console.log(process.uptime());
console.log(process.execPath);
console.log(process.env.PATH); // 환경 변수 PATH
console.log(process.cwd());

//프로세스 종료 이벤트 처리 
process.on('exit',(code) => {console.log('종료:',code)});
